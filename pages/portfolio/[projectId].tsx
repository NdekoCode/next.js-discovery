import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const MyProjectDetails: NextPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <Head>
        <title>Project Details {router.query.projectId}</title>
      </Head>
      <div className="container mt-10">
        <h1 className="title title-2">My single project details</h1>
      </div>
    </>
  );
};

export default MyProjectDetails;
