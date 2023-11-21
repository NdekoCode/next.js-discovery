import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
const MyClientDetailsPage: NextPage = () => {
  const router = useRouter();
  const clientId = router.query.clientId;
  return (
    <>
      <Head>
        <title>My client {clientId} page details</title>
      </Head>
      <div className="container mt-10">
        <h1 className="title title-1">My client page details</h1>
      </div>
    </>
  );
};

export default MyClientDetailsPage;
