import Link from 'next/link';
import { FC } from 'react';

import { Event } from '../../utils/types';
import { AddressIcon, ArrowRightIcon, DateIcon } from '../icons';
import { Button } from '../ui';

type EventProps = {
    event: Event
}
export const EventItem: FC<EventProps> = ({ event }) => {
    const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const readableAddress = event.location.replace(',', "\n");
    const exploreLink = `/events/${event.id}`
    const imageLink = `/${event.image}`
    return (
        <div className="bg-white border shadow-md rounded-xl flex-wrap md:flex-nowrap sm:flex dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-[15rem] md:rounded-se-none md:max-w-xs">
                <img
                    className="absolute inset-0 top-0 object-cover w-full h-full"
                    src={imageLink}
                    alt={event.title}
                />
            </div>
            <div className="flex flex-wrap">
                <div className="flex flex-col h-full p-4 gap-y-5 sm:p-7">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {event.title}
                    </h3>
                    <time className="flex text-sm font-bold text-gray-500 dark:text-gray-500 gap-x-3">
                        <DateIcon />
                        {humanReadableDate}
                    </time>

                    <div className="flex mt-1 italic text-gray-500 dark:text-gray-400 gap-x-3">
                        <AddressIcon />
                        <address>
                            {readableAddress}</address>
                    </div>
                    <div className="flex items-center justify-between mt-5 sm:mt-auto">
                        <Button link={exploreLink} className="flex px-4 py-2 text-white transition-colors bg-green-700 rounded-md hover:bg-green-800 gap-x-2 "><span>Explore event</span><ArrowRightIcon /> </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}
