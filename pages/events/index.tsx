import { NextPage } from 'next';
import Head from 'next/head';

import { EventSearch, EventsList } from '../../components/events';
import { DUMMY_EVENTS } from '../../utils/data/constants';

const EventPage:NextPage = ()=>{
    return <>
        <Head>
            <title>Our events</title>
        </Head>

        <div className="container mt-10">
            <EventSearch/>
            <EventsList events={DUMMY_EVENTS}/>
        </div>
    </>
}

export default EventPage;