import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { EventSearch, EventsList } from '../../components/events';
import { DUMMY_EVENTS } from '../../utils/data/constants';

const EventPage: NextPage = () => {
    const router = useRouter();
    const [ events, setEvents ] = useState(DUMMY_EVENTS);
    const findEventHandler = (selectedYear: string, selectedMonth: string) => {
        if (selectedYear !== '' && selectedMonth !== '') {
            const fullPath = `/events/${selectedYear}/${selectedMonth}`;
            router.push(fullPath)
         }
        
    }
    return <>
        <Head>
            <title>Our events</title>
        </Head>
        <div className="container mt-10">
            <EventSearch onSearch={findEventHandler} />
            <EventsList events={events} />
        </div>
    </>
}

export default EventPage;