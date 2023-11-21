import { NextPage } from "next";
import Head from "next/head";
export const ListOfProject: NextPage = () => {
  return (
    <>
      <Head>
        <title>My list projects</title>
      </Head>
      <div className="container mt-10">
        <h1 className="title title-1">List of my project</h1>
      </div>
    </>
  );
};

export default ListOfProject;
