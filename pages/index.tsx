import type { NextPage } from "next";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Nous apprenons next.js" />
      </Head>
      <main className="prose"></main>
      <h1>Hello next.js</h1>
    </div>
  );
};

export default Home;
