import { FC } from 'react';

import { Event } from '../../utils/types';
import { EventItem } from './Event';

type EventProps = {
    events:Event[]
}
export const EventsList:FC<EventProps> = ({events}) => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {events.map((event, index) => (<EventItem event={event} key={index} />))}
            </div>
        </div>

  )
}