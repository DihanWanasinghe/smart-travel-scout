export default function Footer() {
    return (
        <footer className="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
                            <span className="material-symbols-outlined text-lg">travel_explore</span>
                        </div>
                        <span className="text-lg font-bold text-slate-900 dark:text-white">Smart Travel Scout</span>
                    </div>
                    <p className="text-sm text-center text-slate-500 dark:text-slate-400">
                        © 2026 Smart Travel Scout. <br className="block sm:hidden" /> All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
