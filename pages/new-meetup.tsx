import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { NewMeetupForm } from "../components/meetup";
import { metaDataType } from "../utils/types";
const NewMeetup: NextPage = () => {
  const router = useRouter();
  const getMetaData = (metaData: metaDataType) => {
    console.log(metaData);
    (async () => {
      try {
        const res = await fetch(
          "https://react-nextjs-academind-default-rtdb.firebaseio.com/meetup.json",
          {
            method: "POST",
            body: JSON.stringify(metaData),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await res.json();
        console.log(result);
        router.push("/meetup");
      } catch (error) {
        console.error((error as Error).message);
      }
    })();
  };
  return (
    <>
      <Head>
        <title>Add new Meetup</title>
      </Head>
      <div className="container mt-10">
        <h1 className="title title-2">Add new Meetup</h1>
        <NewMeetupForm onGetMetaData={getMetaData} />
      </div>
    </>
  );
};
export default NewMeetup;
