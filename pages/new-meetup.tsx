import { NextPage } from "next";
import { NewMeetupForm } from "../components/meetup";
const NewMeetup: NextPage = () => {
  return (
    <div className="container mt-10">
      <h1 className="title title-2">Add new Meetup</h1>
      <NewMeetupForm />
    </div>
  );
};
export default NewMeetup;
