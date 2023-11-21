import Head from "next/head";
import { useRouter } from "next/router";

export const ArticleAuth = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <Head>
        <title>Mes propres article</title>
        <meta name="description" content="Mes articles créer sur ce blog" />
      </Head>
      <div className="prose">
        <h1>ArticleAuth</h1>
      </div>
    </>
  );
};
export default ArticleAuth;
