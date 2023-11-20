import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { MeetupProps } from "../utils/types";

type MeetupContext = {
  favoritesMeetup: MeetupProps[];
  setFavoritesMeetup: Dispatch<SetStateAction<MeetupProps[]>>;
  totalFavorites: number;
  setTotalFavorites: Dispatch<SetStateAction<number>>;
  addFavoriteHandler: (meetup: MeetupProps) => void;
  removeFavoriteHandler: (meetup: MeetupProps) => void;
  itemIsFavoriteHandle: (meetup: MeetupProps) => boolean;
  toggleFavoriteAction: (meetup: MeetupProps) => void;
};

export const FavoritesContext = createContext<MeetupContext>({
  favoritesMeetup: [],
  setFavoritesMeetup: () => {},
  totalFavorites: 0,
  setTotalFavorites: () => {},
  addFavoriteHandler: () => {},
  removeFavoriteHandler: () => {},
  itemIsFavoriteHandle: () => false,
  toggleFavoriteAction: () => {},
});

export const FavoritesContextProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [favoritesMeetup, setFavoritesMeetup] = useState<MeetupProps[]>([]);
  const [totalFavorites, setTotalFavorites] = useState(0);

  const addFavoriteHandler = useCallback(
    (meetup: MeetupProps) => {
      setFavoritesMeetup([...favoritesMeetup, meetup]);
    },
    [favoritesMeetup]
  );
  const removeFavoriteHandler = useCallback(
    (meetup: MeetupProps) => {
      setFavoritesMeetup((prevState) =>
        prevState.filter((d) => d.id !== meetup.id)
      );
    },
    [favoritesMeetup]
  );
  const itemIsFavoriteHandle = useCallback(
    (item: MeetupProps) => {
      return favoritesMeetup.some((d) => d.id === item.id);
    },
    [favoritesMeetup]
  );

  const toggleFavoriteAction = useCallback(
    (meetup: MeetupProps) =>
      itemIsFavoriteHandle(meetup)
        ? removeFavoriteHandler(meetup)
        : addFavoriteHandler(meetup),
    [favoritesMeetup]
  );
  const value = useMemo(
    () => ({
      favoritesMeetup,
      setFavoritesMeetup,
      totalFavorites: favoritesMeetup.length,
      setTotalFavorites,
      addFavoriteHandler,
      removeFavoriteHandler,
      itemIsFavoriteHandle,
      toggleFavoriteAction,
    }),
    [favoritesMeetup]
  );
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoriteContext = () => useContext(FavoritesContext);
