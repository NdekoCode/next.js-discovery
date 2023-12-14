import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type SingleEventProps = {
  someId: string;
};
const SingleEvent: NextPage<SingleEventProps> = () => {
  const router = useRouter();
  const someId = router.query.someId;
  return (
    <>
      <Head>
              <title>My Event {someId}</title>
      </Head>
      <div>
              <h1>My event {someId}</h1>
      </div>
    </>
  );
};

export default SingleEvent;
