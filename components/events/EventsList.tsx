import { FC } from 'react';

import { Event } from '../../utils/types';
import DataNotFound from '../DataNotFound';
import { EventItem } from './Event';

type EventProps = {
    events:Event[]
}
export const EventsList:FC<EventProps> = ({events}) => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            {events.length>0 ? (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {events.map((event, index) => (<EventItem event={event} key={index} />))}
                </div>):<DataNotFound/>}
        </div>

  )
}