import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogContent from "../../components/BlogContent";
import { CounterContextProvider } from "../../context/CounterContext";
import { Post } from "../../utils/types/types";

const Blog: NextPage = () => {
  const [posts,setPosts] = useState<Post[]>([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=12').then(res=>res.json()).then(data=>setPosts(data));
  },[])
  return (
    <CounterContextProvider>
      <Head>
        <title>Mon blog</title>
        <meta name="description" content="A simple blog with next.js" />
      </Head>
      <BlogContent posts={posts} />
    </CounterContextProvider>
  );
};

export default Blog;
