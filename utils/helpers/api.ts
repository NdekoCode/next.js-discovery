import { Event } from '../types/index';

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());
export const getAllEvents = async () => {
  const events = (await (
    await fetch("http://localhost:3000/api/events")
  ).json()) as Event[];
  if (!events) {
    return null;
  }
  return events;
};

export const getSingleEvent = async (eventId: string) => {
  const event = (await (
    await fetch(`http://localhost:3000/api/events/${eventId}`)
  ).json()) as Event;
  if (!event) {
    return null;
  }
  return event;
};
export const getAllFilteredEvents = async (dateFilter: {
  year: number;
  month: number;
}): Promise<Event[]> => {
  const { year, month } = dateFilter;

  let filteredEvents = (await getAllEvents())?.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  if (!filteredEvents) {
    return [];
  }

  return filteredEvents;
};
