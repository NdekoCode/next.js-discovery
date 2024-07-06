import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FC, useState } from 'react';

import { BASE_URL } from '../../utils/data/constants';
import { ITranslation } from '../../utils/types';

export const getStaticProps: GetStaticProps<{
  englishWord: ITranslation;
}> = async (context) => {
  const data = await (await fetch(BASE_URL+"/api/vocapi")).json();
  return {
    props: {
      englishWord: data,
    },
  };
};
const RandomWord: FC<{ englishWord: ITranslation }> = ({ englishWord }) => {
  const [generateWord, setGenerateWord] = useState<ITranslation | null>(
    englishWord
  );
  const handleGenerated = () => {
    (async () => {
      const word = (await (
        await fetch(BASE_URL+"/api/vocapi")
      ).json()) as ITranslation;
      if (word) {
        setGenerateWord(word);
      }
    })();
  };
  return englishWord ? (
    <div className="container mt-10">
      <div className="flex flex-col max-w-xs gap-3">
        {generateWord && (
          <Link
            className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium border border-gray-200 text-blue-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-neutral-700"
            href={`/english/${generateWord.en}`}
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
            {generateWord.en} - {generateWord.fr}
          </Link>
        )}

        <button
          onClick={handleGenerated}
          type="button"
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Generate new word
        </button>
      </div>
    </div>
  ) : null;
};
export default RandomWord;
