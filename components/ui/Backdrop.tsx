import { FC } from 'react';

export const Backdrop: FC<{
  isActive?: boolean;
  onActive: <T>(v: boolean | T) => void;
}> = ({ isActive = undefined, onActive }) => {
  return (
    <div
      className={`backdrop-item fixed inset-0 bg-black/5 ${isActive && "hidden"}`}
      onClick={onActive}
    />
  );
};
