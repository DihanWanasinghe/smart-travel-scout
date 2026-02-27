import { SearchResult } from "@/types";
import DestinationCard from "./DestinationCard";

interface RecommendationsProps {
    searchResults: SearchResult[];
    searchQuery: string;
    isSearching?: boolean;
}

export default function Recommendations({ searchResults, searchQuery, isSearching = false }: RecommendationsProps) {
    return (
        <section className="bg-white dark:bg-background-dark py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative min-h-[300px]">

                {/* Main Content Area (Blurred when searching) */}
                <div className={`transition-all duration-300 ${isSearching ? 'opacity-40 blur-sm pointer-events-none' : ''}`}>

                    {searchResults.length === 0 ? (
                        <div className="text-center py-12">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">No Destinations Found</h2>
                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Could you tell me your preferred budget, location, or activity while adjusting your search query?</p>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Top Recommendations</h2>
                                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                                        Based on your preferences for <br className="block sm:hidden" /> &quot;{searchQuery}&quot;
                                    </p>
                                </div>
                            </div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                                {searchResults.map(destination => (
                                    <DestinationCard key={destination.id} destination={destination} />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Loading Overlay */}
                {isSearching && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                        <span className="material-symbols-outlined text-primary text-5xl animate-spin mb-4">progress_activity</span>
                        <p className="text-slate-900 dark:text-white font-bold text-lg drop-shadow-md">
                            Scouting your next destination...
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
