import { SearchResult } from "@/types";
import Image from "next/image";
import Icon from "./Icon";


//Search Results are displayed as Cards via the DestinationCard component
// One card for each object in the api response array
export default function DestinationCard({ destination }: { destination: SearchResult }) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            <div className="relative overflow-hidden bg-slate-200 aspect-[4/3] w-full">
                {/* 
                  Using next/image instead of standard <img> for automatic Core Web Vitals optimization.
                  It serves webp/avif, lazy loads by default, and prevents layout shift via constraints.
                  The `sizes` attribute gives the browser hints on which resolution image to download based on viewport.
                */}
                <Image
                    alt={destination.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    src={destination.imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{destination.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{destination.location}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold text-primary dark:text-secondary">${destination.price}</p>
                        <p className="text-xs text-slate-400">per person</p>
                    </div>
                </div>
                <div className="mt-6 flex-1">
                    <div className="rounded-xl bg-surface-light dark:bg-slate-800 p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <Icon name="psychology" className="text-primary text-sm" />
                            <span className="text-xs font-bold uppercase tracking-wide text-primary">Why this matches</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Icon name="auto_awesome" className="text-slate-400 text-lg mt-0.5" />
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm text-slate-600 dark:text-slate-300">
                                        {destination.reason}
                                    </p>
                                    {destination.matchedTags && destination.matchedTags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {destination.matchedTags.map((tag: string, index: number) => (
                                                <span key={index} className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 dark:bg-primary/20 dark:text-primary dark:ring-primary/30">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
