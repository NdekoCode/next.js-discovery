export type Post = {
  userId?: number | string;
  id: number | string;
  title: string;
  body: string;
};

export type MeetupProps = {
  id: number | string;
  title: string;
  image: string;
  address: string;
  description: string;
};

export type metaDataType = {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
};
