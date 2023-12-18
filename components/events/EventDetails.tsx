import { FC } from 'react';

import { Event } from '../../utils/types';
import { AddressIcon, DateIcon } from '../icons';

type EventProps = {
    event: Event
}

export const EventDetails: FC<EventProps> = ({ event }) => {
    const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const readableAddress = event.location.replace(',', "\n");
    const imageLink = `/${event.image}`
    return (
        <div className="space-y-5 md:space-y-8" >
            <div className="space-y-3">
                <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
                    {event.title}
                </h2>
            </div>
            <div>

                <time className="flex text-sm font-bold text-gray-500 dark:text-gray-500 gap-x-3">
                    <DateIcon />
                    {humanReadableDate}
                </time>

                <div className="flex mt-1 italic text-gray-500 dark:text-gray-400 gap-x-3">
                    <AddressIcon />
                    <address>
                        {readableAddress}</address>
                </div>
            </div>
            <figure className="w-full h-[540px]">
                <img
                    className="object-cover w-full h-full rounded-xl"
                    src={imageLink}
                    alt={event.title}
                />
                <figcaption className="mt-3 text-sm text-center text-gray-500">
                    {event.title}
                </figcaption>
            </figure>
            <div>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                    {event.description}
                </p>
            </div>
        </div>
    )
}
