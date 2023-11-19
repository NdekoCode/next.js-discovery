import Image from "next/image";
import { FC } from "react";
import { MeetupProps } from "../../utils/types/types";
import { Card } from "../ui";
export const Meetup: FC<{ meetup: MeetupProps }> = ({ meetup }) => {
  return (
    <Card>
      <Image
        width={250}
        height={170}
        className="inline-block w-full h-[175px] object-cover rounded-t-xl"
        src={meetup.image}
        alt="Image Description"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {meetup.title}
        </h3>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {meetup.description}
        </p>
        <a
          className="inline-flex items-center justify-center px-3 py-2 mt-2 text-sm font-semibold text-white bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          Go somewhere
        </a>
      </div>
    </Card>
  );
};
