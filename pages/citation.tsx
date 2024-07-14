import Head from 'next/head';
import { FC } from 'react';

type Quote = {
  quote: string;
  author: string;
  category: string;
};

const citation: FC<{ citations: Quote[] }> = (props) => {
  console.log(props);
  const citations = props.citations;
  return (
    <>
      <Head>
        <title>Citations</title>
      </Head>
      <div className="flex items-center justify-center mt-10">
        {citations.map((citation, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center h-56 gap-5 p-5 text-white bg-blue-500 rounded-3xl w-96"
          >
            <p className="text-base text-centr">{citation.quote}</p>
            <p className="text-base text-centr">{citation.author}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export const getStaticProps = async () => {
  const QUOTE_API = process.env.NEXT_QUOTE_API_KEY;
  if (!QUOTE_API) {
    console.log("NEXT_QUOTE_API is NOT DEFINED");
    return {
      props: {
        citations: [],
      },
    };
  }
  const citations = await (
    await fetch("https://api.api-ninjas.com/v1/quotes?category=best", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": QUOTE_API,
      },
    })
  ).json();
  if (citations.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      citations,
    },
    revalidate: 20,
  };
};
export default citation;
