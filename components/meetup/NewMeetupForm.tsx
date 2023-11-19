import { FC, FormEvent } from "react";
import classes from "../../styles/NewMeetupForm.module.scss";
export const NewMeetupForm: FC = () => {
  const handleSubmit: (e: FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}></form>
    </div>
  );
};
