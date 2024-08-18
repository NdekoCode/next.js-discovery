import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { BlogContent } from '../../../components';
import { CounterContextProvider } from '../../../context/CounterContext';
import { Post } from '../../../utils/types/types';

type PostProps = {
  posts: Post[];
  date: string;
};
const AllPostPage: NextPage<PostProps> = ({ posts, date }) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <CounterContextProvider>
      <Head>
        <title>Mon blog</title>
        <meta name="description" content="A simple blog with next.js" />
      </Head>
      <div>
        <strong>{date}</strong>
      </div>
      <BlogContent posts={posts} />
    </CounterContextProvider>
  );
};

export const getStaticProps: GetStaticProps<PostProps> = async () => {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12"
  ).then((res) => res.json());
  return {
    props: {
      posts,
      date: new Date().toString(),
    },
    revalidate: 15,
  };
};

export default AllPostPage;
