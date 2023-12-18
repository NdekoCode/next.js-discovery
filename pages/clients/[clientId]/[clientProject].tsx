import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const MyClientProject: NextPage = () => {
  const router = useRouter();
  const clientId = router.query.clientId;
  const clientProject = router.query.clientProject;
  console.log(router.query);
  return (
    <>
      <Head>
        <title>
          My Client {clientId} projec {clientProject}t
        </title>
      </Head>
      <div className="container mt-10">
        <h1 className="title title-1">My client project</h1>
      </div>
    </>
  );
};

export default MyClientProject;
