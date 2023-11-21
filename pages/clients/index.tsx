import { NextPage } from "next";
import Head from "next/head";

const ClientsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>My client page</title>
      </Head>
      <div className="container mt-10">
        <h1 className="title title-1">My client page</h1>
      </div>
    </>
  );
};

export default ClientsPage;
