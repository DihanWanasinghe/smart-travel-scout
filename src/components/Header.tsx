export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-center border-b border-slate-100 dark:border-slate-800 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-6 py-4 lg:px-12">
            <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-2xl">travel_explore</span>
                </div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Smart Travel Scout</h2>
            </div>
        </header>
    );
}
