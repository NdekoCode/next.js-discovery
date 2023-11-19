import { NextPage } from "next";
import Meetup from "../components/meetup/Meetup";
import { DUMMY_DATA } from "../utils/types/data/constants";
("next");
const MeetupPage: NextPage = () => {
  return (
    <div className="">
      <div className="container flex flex-wrap gap-3 mt-10">
        {DUMMY_DATA.map((item) => (
          <Meetup meetup={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default MeetupPage;
