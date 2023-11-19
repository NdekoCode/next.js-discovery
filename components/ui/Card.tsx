import { FC, PropsWithChildren } from "react";

export const Card: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex basis-64 flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      {children}
    </div>
  );
};
