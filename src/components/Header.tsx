export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-6 py-4 lg:px-12">
            <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-2xl">travel_explore</span>
                </div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Smart Travel Scout</h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
                <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors" href="#">Destinations</a>
                <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors" href="#">My Trips</a>
                <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors" href="#">Community</a>
                <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors" href="#">About</a>
            </nav>
            <div className="flex items-center gap-3">
                <button className="hidden sm:flex h-10 items-center justify-center px-4 text-sm font-bold text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-white transition-colors">
                    Log In
                </button>
                <button className="flex h-10 cursor-pointer items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-md shadow-primary/20 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all">
                    Sign Up
                </button>
            </div>
        </header>
    );
}
