import Head from "next/head";

export const ArticleAuth = () => {
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
