import { NextPage } from "next";
import Head from "next/head";
import { Meetup } from "../components/meetup";
import { DUMMY_DATA } from "../utils/types/data/constants";
const MeetupPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Meetup</title>
      </Head>

      <div className="">
        <div className="container flex flex-wrap gap-3 mt-10">
          {DUMMY_DATA.map((item) => (
            <Meetup meetup={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default MeetupPage;
