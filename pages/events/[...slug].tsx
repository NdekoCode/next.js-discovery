import {
    GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, NextPage
} from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Loading } from '../../components';
import DataNotFound from '../../components/DataNotFound';
import { EventsList } from '../../components/events';
import { Button } from '../../components/ui';
import { DUMMY_EVENTS } from '../../utils/data/constants';
import { Event } from '../../utils/types';

const FilterEventsPage: NextPage = () => {
  const events = DUMMY_EVENTS;
  let filteredEvents: Event[] = [];
  const router = useRouter();
  const paramsData: string[] = router.query?.slug as string[];
  if (!paramsData) {
    return <Loading />;
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
    return <DataNotFound />;
  }
  if (selectedYear && selectedMonth) {
    filteredEvents = events.filter((event) => {
      const date = new Date(event.date);

      return (
        date.getFullYear() === selectedYear &&
        date.getMonth() + 1 === selectedMonth
      );
    });
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
  return {
    paths: [
      {
        params: {
          slug: [""],
        },
      },
    ],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  console.log("Static Props", context);
  const params = context.params;
  return {
    props: {},
  };
};
export default FilterEventsPage;
