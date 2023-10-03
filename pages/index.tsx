import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="prose"></main>
      <h1>Hello next.js</h1>
    </div>
  );
};

export default Home;
