import { NextPage } from "next";
import Meetup from "../components/Meetup";
import { DUMMY_DATA } from "../utils/types/data/constants";
("next");
const MeetupPage: NextPage = () => {
  return (
    <div className="">
      <div className="container grid flex-wrap gap-4 mt-10 basis-56">
        {DUMMY_DATA.map((item) => (
          <Meetup meetup={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default MeetupPage;
