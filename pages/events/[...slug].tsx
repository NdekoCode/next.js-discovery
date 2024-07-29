import {
    GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, NextPage
} from 'next';
import Head from 'next/head';

import DataNotFound from '../../components/DataNotFound';
import { EventsList } from '../../components/events';
import { Button } from '../../components/ui';
import { getAllEvents, getAllFilteredEvents } from '../../utils/helpers/api';
import { Event } from '../../utils/types';

const FilterEventsPage: NextPage<{
  filteredEvents: Event[];
}> = ({ filteredEvents }) => {
  if (!filteredEvents) {
    return <DataNotFound />;
  }
  return (
    <>
      <Head>
        <title>My Events</title>
      </Head>

      <div className="container my-20">
        <Button
          className="flex items-center px-4 py-2 text-white transition-colors bg-green-700 rounded-md w-max hover:bg-green-800 gap-x-2"
          link="/events"
        >
          Go to all events
        </Button>
        <h1 className="my-3 text-3xl font-bold">My filter event page</h1>

        <EventsList events={filteredEvents} />
      </div>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
) => {
  console.log("Static Paths", context);
  const events = await getAllEvents();
  const paths = events.map((event) => {
    const eventDate = new Date(event.date);
    return {
      params: {
        slug: [
          eventDate.getFullYear().toString(),
          eventDate.getMonth().toString(),
        ],
      },
    };
  });
  return { paths, fallback: true };
};
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  console.log("Static Props", context);

  let filteredEvents: Event[] = [];
  const paramsData: string[] = context.params?.slug as string[];
  if (!paramsData) {
    return {
      notFound: true,
    };
  }
  const selectedYear = +(paramsData[0] || "");
  const selectedMonth = +(paramsData[1] || "");
  const currentYear = new Date().getFullYear();

  if (
    isNaN(selectedYear) ||
    isNaN(selectedMonth) ||
    selectedYear > currentYear ||
    selectedMonth < 1 ||
    selectedMonth > 12
  ) {
    return {
      notFound: true,
    };
  }
  if (selectedYear && selectedMonth) {
    filteredEvents = await getAllFilteredEvents({
      year: selectedYear,
      month: selectedMonth,
    });
  }
  return {
    props: { filteredEvents },
  };
};
export default FilterEventsPage;
