import { FC } from "react";

const Backdrop: FC<{
  isActive?: boolean;
  onActive: <T>(v: boolean | T) => void;
}> = ({ isActive = undefined, onActive }) => {
  return (
    <div
      className={`backdrop-item ${isActive && "hidden"}`}
      onClick={onActive}
    />
  );
};
export default Backdrop;
