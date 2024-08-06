import { FC, useEffect, useState } from 'react';

import { Event, IComment } from '../../utils/types';
import { AddressIcon, DateIcon } from '../icons';
import CommentForm from './CommentForm';
import Comments from './Comments';

type EventProps = {
  event: Event;
};

export const EventDetails: FC<EventProps> = ({ event }) => {
  const [isShown, setIsShown] = useState(false);

  const [dataComments, setDataComment] = useState<IComment[]>([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const humanReadableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const readableAddress = event.location.replace(",", "\n");
  const imageLink = `/${event.image}`;

  const getComments = async () => {
    try {
      const data = await (await fetch(`/api/comments/${event.id}`)).json();
      if (data) {
        setDataComment(() => data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
  }, [isUpdated]);
  return (
    <main className="container flex flex-col items-center gap-y-10">
      <div className="space-y-5 md:space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
            {event.title}
          </h2>
        </div>
        <div>
          <time className="flex text-sm font-bold text-gray-500 dark:text-gray-500 gap-x-3">
            <DateIcon />
            {humanReadableDate}
          </time>

          <div className="flex mt-1 italic text-gray-500 dark:text-gray-400 gap-x-3">
            <AddressIcon />
            <address>{readableAddress}</address>
          </div>
        </div>
        <figure className="w-full h-[540px]">
          <img
            className="object-cover w-full h-full rounded-xl"
            src={imageLink}
            alt={event.title}
          />
          <figcaption className="mt-3 text-sm text-center text-gray-500">
            {event.title}
          </figcaption>
        </figure>
        <div>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            {event.description}
          </p>
        </div>
      </div>

      <button
        type="button"
        className="inline-flex items-center px-4 py-3 text-sm font-medium text-white capitalize bg-teal-500 border border-transparent rounded-lg gap-x-2 hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none"
        onClick={() => setIsShown((d) => !d)}
      >
        Show comment block
      </button>
      {isShown && (
        <>
          <CommentForm eventId={event.id} getComments={getComments} />
          {<Comments comments={dataComments} />}
        </>
      )}
    </main>
  );
};
