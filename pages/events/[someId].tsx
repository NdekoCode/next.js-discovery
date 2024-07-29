import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import DataNotFound from '../../components/DataNotFound';
import { EventDetails } from '../../components/events';
import { getAllEvents, getSingleEvent } from '../../utils/helpers/api';
import { Event } from '../../utils/types';

type SingleEventProps = {
  someId: string;
  event: Event | null;
};
const SingleEvent: NextPage<SingleEventProps> = ({ event, someId }) => {
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
  const events = await getAllEvents();
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
  const event = await getSingleEvent(params?.someId as string)!;
  return {
    props: {
      event,
    },
  };
};

export default SingleEvent;
