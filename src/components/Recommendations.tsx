import { topDestinations } from "@/data/destinations";
import DestinationCard from "./DestinationCard";

export default function Recommendations() {
    return (
        <section className="bg-white dark:bg-background-dark py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Top Recommendations</h2>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Based on your preferences for &quot;surfing&quot;, &quot;budget-friendly&quot;, and &quot;chill vibes&quot;</p>
                    </div>
                    <div className="flex gap-2">
                        
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
                    {topDestinations.map(destination => (
                        <DestinationCard key={destination.id} destination={destination} />
                    ))}
                </div>

                {/* View More Button */}
                <div className="mt-16 flex justify-center">
                    <button className="flex items-center cursor-pointer justify-center gap-2 rounded-xl bg-white dark:bg-slate-800 px-6 py-3 text-sm font-bold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                        Show More Destinations
                        <span className="material-symbols-outlined text-lg">expand_more</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
