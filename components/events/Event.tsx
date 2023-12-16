import Link from 'next/link';
import { FC } from 'react';

import { Event } from '../../utils/types';

type EventProps = {
    event: Event
}
export const EventItem: FC<EventProps> = ({ event }) => {
    const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year:'numeric'
    });
    const readableAddress = event.location.replace(',', "\n");
    const exploreLink = `/events/${event.id}`
    const imageLink = `/${event.image}`
    return (
        <div className="bg-white border shadow-md rounded-xl flex-wrap md:flex-nowrap sm:flex dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-[15rem] md:rounded-se-none md:max-w-xs">
                <img
                    className="w-full h-full absolute top-0 inset-0 object-cover"
                    src={imageLink}
                    alt={event.title}
                />
            </div>
            <div className="flex flex-wrap">
                <div className="p-4 flex flex-col h-full sm:p-7">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {event.title}
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                        {event.description}
                    </p>

                    <div className="mt-1 text-gray-500 dark:text-gray-400">
                        <address>
                            {readableAddress}</address>
                    </div>
                    <div className="mt-5 sm:mt-auto flex items-center justify-between">
                        <time className="text-xs text-gray-500 dark:text-gray-500">
                            {humanReadableDate}
                        </time>
                        <Link href={exploreLink}/>
                    </div>
                </div>
            </div>
        </div>

    )
}
