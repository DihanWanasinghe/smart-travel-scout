interface HeroProps {
    searchQuery: string;
    setSearchQuery: (val: string) => void;
    onSearch: (val: string) => void;
    isSearching: boolean;
}

export default function Hero({ searchQuery, setSearchQuery, onSearch, isSearching }: HeroProps) {
    // Why is state lifted up to page.tsx instead of keeping it entirely within Hero?
    // Because the sister component, 'Recommendations', needs to know when to show 
    // the loading state (isSearching) and what the final query was (activeSearchQuery).
    // The Hero acts purely as a controlled component, delegating search logic up.
    return (
        <section className="relative isolate overflow-hidden bg-surface-light dark:bg-surface-dark pb-16 pt-14 lg:pb-32 lg:pt-24">
            {/* Abstract Background Pattern */}
            <div className="absolute inset-0 -z-10 opacity-40 dark:opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
            <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/30 via-transparent to-transparent"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="mx-auto max-w-4xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 mb-8 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">AI Powered v2.0</span>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
                        Where will your story <br className="hidden sm:block" /> take you next?
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Describe your dream trip in plain English. Our AI scout finds the perfect destinations, flights, and vibes tailored just for you.
                    </p>
                </div>

                {/* Search Box Container */}
                <div className="mx-auto mt-12 max-w-3xl">
                    <div className="relative group">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
                        <div className="relative flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0 rounded-2xl bg-white dark:bg-slate-800 p-2 shadow-xl ring-1 ring-slate-900/5">
                            <div className="hidden md:flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-700 text-primary dark:text-secondary">
                                <span className="material-symbols-outlined text-3xl">magic_button</span>
                            </div>
                            <input
                                className="flex-auto bg-transparent border-0 px-4 py-4 md:py-3 text-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 outline-none text-center md:text-left"
                                placeholder="e.g., a chilled beach weekend with surfing vibes under $100"
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') onSearch(searchQuery);
                                }}
                            />
                            <button
                                onClick={() => onSearch(searchQuery)}
                                disabled={isSearching}
                                className="flex-none rounded-xl bg-primary px-6 py-4 md:py-3 text-sm font-bold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all cursor-pointer disabled:opacity-50 w-full md:w-auto">
                                {isSearching ? "Scouting..." : "Scout Locations"}
                            </button>
                        </div>
                    </div>

                    {/* Suggestion Pills */}
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => setSearchQuery("Sri Lankan Adventures")}
                            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-white hover:border-primary/50 transition-colors">
                            <span className="material-symbols-outlined text-[16px]">landscape</span>
                            Sri Lankan Adventures
                        </button>
                        <button
                            onClick={() => setSearchQuery("Budget trips under $100")}
                            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-white hover:border-primary/50 transition-colors">
                            <span className="material-symbols-outlined text-[16px]">payments</span>
                            Budget trips under $100
                        </button>
                        <button
                            onClick={() => setSearchQuery("Ancient Heritage")}
                            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-white hover:border-primary/50 transition-colors">
                            <span className="material-symbols-outlined text-[16px]">account_balance</span>
                            Ancient Heritage
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
