import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nous contacter</title>
      </Head>

      <Header />
      <main className="prose">
        <h1>Nous contacter</h1>
      </main>
    </div>
  );
};

export default Contact;
