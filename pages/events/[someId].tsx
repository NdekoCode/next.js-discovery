import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import DataNotFound from '../../components/DataNotFound';
import { EventDetails } from '../../components/events';
import { getEventById } from '../../utils/data/constants';

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
        {event ? <EventDetails event={event}/>: <DataNotFound/>}
      </div>
    </>
  );
};

export default SingleEvent;
