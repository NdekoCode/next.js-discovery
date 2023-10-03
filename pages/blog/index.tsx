import { NextPage } from "next";
import Head from "next/head";
import BlogContent from "../../components/BlogContent";
import { CounterContextProvider } from "../../context/CounterContext";

const Blog: NextPage = () => {
  return (
    <CounterContextProvider>
      <Head>
        <title>Mon blog</title>
        <meta name="description" content="A simple blog with next.js" />
      </Head>

      <BlogContent />
    </CounterContextProvider>
  );
};

export default Blog;
