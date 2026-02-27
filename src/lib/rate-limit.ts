export interface RateLimiterOptions {
    limit: number;
    windowMs: number;
}

export function rateLimit(options: RateLimiterOptions) {
    const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

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
