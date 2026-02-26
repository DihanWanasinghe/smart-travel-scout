import { Destination } from "@/types";
import DestinationCard from "./DestinationCard";

interface RecommendationsProps {
    searchResults: Destination[];
    searchQuery: string;
}

export default function Recommendations({ searchResults, searchQuery }: RecommendationsProps) {
    if (searchResults.length === 0) {
        return (
            <section className="bg-white dark:bg-background-dark py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">No Destinations Found</h2>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Try adjusting your search query.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-white dark:bg-background-dark py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Top Recommendations</h2>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Based on your preferences for &quot;{searchQuery}&quot;</p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
                    {searchResults.map(destination => (
                        <DestinationCard key={destination.id} destination={destination} />
                    ))}
                </div>
            </div>
        </section>
    );
}
