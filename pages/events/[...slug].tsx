import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Loading } from '../../components';
import DataNotFound from '../../components/DataNotFound';
import { EventsList } from '../../components/events';
import { Button } from '../../components/ui';
import { DUMMY_EVENTS } from '../../utils/data/constants';
import { Event } from '../../utils/types';

const FilterEventsPage: NextPage = () => {

    let events = DUMMY_EVENTS;
    let filteredEvents:Event[] = [];
    const router = useRouter();
    const paramsData: string[] = router.query?.slug as string[]
    if (!paramsData) {
        return <Loading />
    }
    const selectedYear = paramsData[ 0 ] || '';
    const selectedMonth = paramsData[ 1 ] || '';
    const numYear = +selectedYear;
    const numMonth = +selectedMonth;
    const currentYear = (new Date()).getFullYear();
    if (isNaN(numYear) || isNaN(numMonth) || numYear > currentYear || numMonth < 1 || numMonth > 12) {
        return <DataNotFound/>
     }
    if (selectedYear !== '' && selectedMonth !== '') {
        filteredEvents = events.filter(event => {
            const date = new Date(event.date);
            return date.getFullYear() === numYear && date.getMonth()  === numMonth-1;
        })
        if (filteredEvents.length > 0) {
            events = filteredEvents;
        }

    }
    return (
        <>
            <Head>
                <title>My Events</title>
            </Head>

            <div className='container my-20'>
                <Button className="flex items-center px-4 py-2 w-max text-white transition-colors bg-green-700 rounded-md hover:bg-green-800 gap-x-2" link="/events">Go to all events</Button>
                <h1 className="text-3xl font-bold my-3">My filter event page</h1>
        
                <EventsList events={filteredEvents} />
            </div>
        </>
    );
};

export default FilterEventsPage;
