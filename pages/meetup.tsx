import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Loading } from "../components";
import { Meetup } from "../components/meetup";
import { metaDataType } from "../utils/types";
const MeetupPage: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [meetupData, setMeetupData] = useState<metaDataType[]>([]);

  useEffect(() => {
    fetch(
      "https://react-nextjs-academind-default-rtdb.firebaseio.com/meetup.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const meetup = [];
        for (let item in data) {
          meetup.push(data[item]);
        }
        setMeetupData(meetup);

        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Meetup</title>
      </Head>

      <div className="">
        <div className="container flex flex-wrap gap-3 mt-10">
          {loading ? (
            <Loading />
          ) : meetupData ? (
            meetupData.map((item) => <Meetup meetup={item} key={item.id} />)
          ) : null}
        </div>
      </div>
    </>
  );
};
export default MeetupPage;
