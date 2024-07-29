import { Event } from '../types/index';

export const getAllEvents = async () => {
  if (typeof window === "undefined") {
    const { readFile } = await import("fs/promises");
    const { join } = await import("path");

    const path = join(process.cwd(), "utils", "data", "events.json");
    const data = await readFile(path, {
      encoding: "utf-8",
    });
    const { events } = JSON.parse(data) as { events: Event[] };
    return events;
  }
  throw new Error("getAllEvents should only be called server-side");
};

export const getSingleEvent = async (eventId: string) => {
  const events = await getAllEvents();
  const event = events.find((event) => event.id === eventId)!;
  return event;
};
export const getAllFilteredEvents = async (dateFilter: {
  year: number;
  month: number;
}): Promise<Event[]> => {
  const { year, month } = dateFilter;

  let filteredEvents = (await getAllEvents()).filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};