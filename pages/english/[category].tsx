import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';

import { BASE_URL } from '../../utils/data/constants';
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
      <div className="container">
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
export const getStaticProps: GetStaticProps = async (context) => {
  const data = ((await (
    await fetch(BASE_URL + "/api/english")
  ).json()) as unknown) as {
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
      if (itemObject === context?.params?.category) {
        return itemObject;
      }
    }) || null;
  if (!item) {
    return {
      // Not found est utiliser quand rien n'est trouver pour renvoyer à la page d'erreur 404, cette proprieter est utilisable uniquement sur `getStaticProps`
      notFound: true,
      /**
       * Par contre on pourrai bien le remplacer par ceci pour dire, si tu ne trouve rien, redirige l'utilisateur sur la page d'acceuil
      redirect:{
        destination:"/"
      }
       */
    };
  }
  return {
    props: {
      data: item[context?.params?.category as string],
      category: context?.params?.category,
    },
    // revalidate: 20000: Utiliser pour faire du Incremental Static Generation (Uniquement utilisable sur getStaticProps ou dans la fonction "fetch")
  };
};

export const getStaticPaths = async () => {
  const data = ((await (
    await fetch(BASE_URL + "/api/english")
  ).json()) as unknown) as {
    englishList: IEnglish[];
  };
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
    fallback: false, // Ceci si c'est "false" cela veut dire si je tombe sur un chemin qui n'existe pas alors renvois l'erreur 404
    // Quand fallback est à "true" cela veut dire que on doit charger certaines page quand quand l'utilisateur les demander et pour cela dans la page de composant il faut preparer un effet de verifications des données provenant de getStaticProps avec un loading... ou skeleton
    // si fallback est à "blocking" c'est le meme cas que quand il est à fallback:true mais vous n'aurez plus besoin de faire de verification et un composant de chargement car "blocking" va bloquer le rendus jusqu'à ce que les données soit disponible.
  };
};
export default EnglishLearning;
