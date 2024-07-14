import { readFile } from 'fs/promises';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { join } from 'path';

import { EventSearch, EventsList } from '../../components/events';
import { Event } from '../../utils/types';

const EventPage: NextPage<{ events: Event[] }> = ({ events }) => {
  const router = useRouter();
  const findEventHandler = (selectedYear: string, selectedMonth: string) => {
    if (selectedYear !== "" && selectedMonth !== "") {
      const fullPath = `/events/${selectedYear}/${selectedMonth}`;
      router.push(fullPath);
    }
  };
  return (
    <>
      <Head>
        <title>Our events</title>
      </Head>
      <div className="container mt-10">
        <EventSearch onSearch={findEventHandler} />
        <EventsList events={events} />
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps<{ events: Event[] }> = async (
  context
) => {
  const path = join(process.cwd(), "utils", "data", "events.json");
  const data = await readFile(path, {
    encoding: "utf-8",
  });
  const { events } = JSON.parse(data) as { events: Event[] };
  console.log(events);
  return {
    props: { events },
  };
};
export default EventPage;
