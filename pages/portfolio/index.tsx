import { NextPage } from "next";
import Head from "next/head";

const PortfolioPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>My portfolio</title>
      </Head>
      <div className="container mt-10">
        <h1 className="title title-2">My portfolio</h1>
      </div>
    </>
  );
};

export default PortfolioPage;
