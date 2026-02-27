export interface RateLimiterOptions {
    limit: number;
    windowMs: number;
}

export function rateLimit(options: RateLimiterOptions) {
    // We store the mapping outside the returned handler so it persists across multiple 
    // individual requests to the same serverless instance.
    const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

    // Returns a closure that traps the rateLimitMap in its lexical scope.
    // This allows the route.ts file to easily invoke check() with an elegant `await limiter(req)`.
    return function check(req: Request, res?: Response) {
        return new Promise((resolve, reject) => {
            const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
            const now = Date.now();
            const windowStart = now - options.windowMs;

            const record = rateLimitMap.get(ip);

            if (record) {
                if (record.timestamp > windowStart) {
                    // Still in the current window
                    if (record.count >= options.limit) {
                        return reject(new Error("Rate limit exceeded"));
                    }
                    record.count += 1;
                } else {
                    // New window
                    rateLimitMap.set(ip, { count: 1, timestamp: now });
                }
            } else {
                // First request from this IP
                rateLimitMap.set(ip, { count: 1, timestamp: now });
            }

            resolve(true);
        });
    };
}
