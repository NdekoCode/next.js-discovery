import { readFile } from 'fs/promises';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { join } from 'path';

import DataNotFound from '../../components/DataNotFound';
import { EventDetails } from '../../components/events';
import { getEventById } from '../../utils/data/constants';
import { Event } from '../../utils/types';

type SingleEventProps = {
  someId: string;
};
const SingleEvent: NextPage<SingleEventProps> = () => {
  const router = useRouter();
  const someId = router.query.someId as string;
  const event = getEventById(someId);
  return (
    <>
      <Head>
        <title>My Event {someId}</title>
      </Head>
      <div className="container my-20">
        {event ? <EventDetails event={event} /> : <DataNotFound />}
      </div>
    </>
  );
};
export const getStaticPaths = async () => {
  const path = join(process.cwd(), "utils", "data", "events.json");
  const { events } = JSON.parse(
    await readFile(path, {
      encoding: "utf-8",
    })
  ) as { events: Event[] };
  const paths = events.map((item) => ({
    params: {
      someId: item.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<{ event: Event }> = async (
  context
) => {
  const { params } = context;
  const path = join(process.cwd(), "utils", "data", "events.json");
  const { events } = JSON.parse(
    await readFile(path, {
      encoding: "utf-8",
    })
  ) as { events: Event[] };
  const event = events.find((event) => event.id === params?.someId)!;
  return {
    props: {
      event,
    },
  };
};

export default SingleEvent;
