import { FC } from "react";

export const Backdrop: FC<{
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
