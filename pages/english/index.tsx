import { FC } from 'react';

import { BASE_URL } from '../../utils/data/constants';
import { IEnglish } from '../../utils/types';

export const getStaticProps = async () => {
  console.log(BASE_URL);
  const data = ((await (
    await fetch(BASE_URL+"/api/english")
  ).json()) as unknown) as {
    englishList: IEnglish[];
  };
  const englishList = data.englishList;
  if (!englishList.length) return { notFound: true };
  return {
    props: {
      englishList,
    },
  };
};
const index: FC<{ englishList: IEnglish[] }> = ({ englishList }) => {
  console.log(BASE_URL);
  const englishDataKeys = englishList.map((item) => {
    return Object.keys(item)[0];
  });
  return englishDataKeys.length ? (
    <div className="container mt-10">
      <ul className="flex flex-col max-w-xs gap-3">
        {englishDataKeys.map((item, index) => (
          <li key={index}>
            <a
              className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium border border-gray-200 text-blue-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-neutral-700"
              href={`/english/${item}`}
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                <path d="M12 12v9" />
                <path d="m8 17 4 4 4-4" />
              </svg>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default index;
