import { Destination } from "@/types";

export default function DestinationCard({ destination }: { destination: Destination }) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                <img
                    alt={destination.imageAlt}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    src={destination.imageUrl}
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <div className="flex items-center justify-center rounded-full bg-white/90 p-2 shadow-sm backdrop-blur-sm cursor-pointer">
                        <span className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors text-xl">favorite</span>
                    </div>
                </div>
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
                        <p className="text-sm text-slate-500 dark:text-slate-400">{destination.country}</p>
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
                            {destination.matchReasons.map((reason, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-400 text-lg mt-0.5">{reason.icon}</span>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">
                                        <strong className="text-slate-900 dark:text-white">{reason.title}</strong> {reason.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-center border-t border-slate-100 dark:border-slate-800 pt-4">
                    {/* <div className="flex -space-x-2 overflow-hidden">
                        {destination.avatars.map((avatar, index) => (
                            <img
                                key={index}
                                alt="User Avatar"
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900"
                                src={avatar}
                            />
                        ))}
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 ring-2 ring-white dark:bg-slate-700 dark:ring-slate-900">
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-300">+{destination.additionalFriends}</span>
                        </div>
                    </div> */}
                    <button className="text-sm cursor-pointer font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                        View Details 
                        {/* <span className="material-symbols-outlined text-lg">arrow_forward</span> */}
                    </button>
                </div>
            </div>
        </div>
    );
}
