import Head from 'next/head';
import { FC } from 'react';

type LangKey = "fr" | "en";
const EnglishLearning: FC<{
  vocabularies: { [key in LangKey]: string }[];
}> = ({ vocabularies }) => {
  return (
    <>
      <Head>
        <title>Learn English</title>
      </Head>
      <div>
        {vocabularies ? (
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start dark:text-neutral-500"
                        >
                          English
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start dark:text-neutral-500"
                        >
                          French
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                      {vocabularies.map((vocabulary, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 capitalize whitespace-nowrap dark:text-neutral-200">
                            {vocabulary.en}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 capitalize whitespace-nowrap dark:text-neutral-200">
                            {vocabulary.fr}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
export const getStaticProps = async () => {
  const data = await import("../utils/data/vocabulary.json");
  if(!data.vocabulary.length){
    return {
      notFound: true
    }
  }
  console.log(data.vocabulary);
  return {
    props: {
      vocabularies: data.vocabulary,
    },
  };
};

export default EnglishLearning;
