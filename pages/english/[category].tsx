import Head from 'next/head';
import { FC } from 'react';

import { IEnglish } from '../../utils/types';

type LangKey = "fr" | "en";
const EnglishLearning: FC<{
  data: { [key in LangKey]: string }[];
  category: string;
}> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Learn English</title>
      </Head>
      <div>
        {data ? (
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
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 capitalize whitespace-nowrap dark:text-neutral-200">
                            {item.en}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 capitalize whitespace-nowrap dark:text-neutral-200">
                            {item.fr}
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
export const getStaticProps = async ({
  params,
}: {
  params: { category: string };
}) => {
  const data = (await import("../../utils/data/english.json")) as unknown as {
    englishList: IEnglish[];
  };
  if (!data.englishList.length) {
    return {
      notFound: true,
    };
  }
  const item =
    data.englishList.find((item) => {
      const itemObject = Object.keys(item)[0];
      if (itemObject === params.category) {
        return itemObject;
      }
    }) || null;
  if (!item) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: item[params.category as string],
      category: params.category,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await import("../../utils/data/english.json");
  const paths = data.englishList.map((item, index) => {
    const category = Object.keys(item)[0];
    return {
      params: {
        category,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export default EnglishLearning;
