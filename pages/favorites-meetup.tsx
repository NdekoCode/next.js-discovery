import { NextPage } from "next";
import Head from "next/head";
import { Meetup } from "../components/meetup";
import { useFavoriteContext } from "../stores/FavoritesContext";
const FavoritesMeetupPage: NextPage = () => {
  const { favoritesMeetup } = useFavoriteContext();

  return (
    <>
      <Head>
        <title>Meetup</title>
      </Head>

      <div className="">
        <div className="container flex flex-wrap gap-3 mt-10">
          {favoritesMeetup.length > 0 ? (
            favoritesMeetup.map((item) => (
              <Meetup meetup={item} key={item.id} />
            ))
          ) : (
            <h1 className="title title-1">No favorites meetup now !</h1>
          )}
        </div>
      </div>
    </>
  );
};
export default FavoritesMeetupPage;
