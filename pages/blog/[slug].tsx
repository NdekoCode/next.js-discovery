import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
import { Post } from "../../utils/types/types";

type ReadProps = {
  post: Post;
};
export default function Read({ post }: ReadProps) {
  const router: NextRouter = useRouter();
  useEffect(() => {
    console.log(router.route); // La route que l'on utilise, dans notre cas `/blog/[id]`
    console.log(router.asPath); // Nous permet de savoir sur quelle chemin on est
    console.log(router.query.slug); // Va contenir les paramètres de l'URL et leurs valeur
  }, []);
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`L'article ${router.query.slug}`} />
      </Head>
      <div className="prose">
        <h1 className="capitalize">{post.title}</h1>
        <main>{post.body}</main>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<ReadProps> = async (
  context: GetStaticPropsContext
) => {
  console.log(context);
  const { params } = context;
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.slug}`
  ).then((res) => res.json());
  return {
    props: {
      post,
    },
  };
};
export async function getStaticPaths() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12"
  ).then((res) => res.json());
  return {
    paths: posts.map((post) => ({
      params: { slug: post.id.toString() },
    })),
    // A fallback: false permet de rediriger vers une page d'erreur si l'URL n'existe pas
    fallback: false,
  };
}
