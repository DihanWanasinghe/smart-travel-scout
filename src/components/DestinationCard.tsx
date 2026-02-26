export default function DestinationCard({ destination }: { destination: any }) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            <div className="relative overflow-hidden bg-slate-200 aspect-[4/3] w-full">
                <img
                    alt={destination.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    src={destination.imageUrl}
                />
                {/* Heart icon removed */}
                {/* <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center rounded-lg bg-white/90 px-2 py-1 text-xs font-bold text-slate-900 backdrop-blur-sm">
                        <span className="material-symbols-outlined mr-1 text-base text-yellow-500">star</span>
                        {destination.rating} ({destination.reviews} reviews)
                    </span>
                </div> */}
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
                            <span className="material-symbols-outlined text-primary text-sm">psychology</span>
                            <span className="text-xs font-bold uppercase tracking-wide text-primary">Why this matches</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-slate-400 text-lg mt-0.5">auto_awesome</span>
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
