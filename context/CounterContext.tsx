import {
  createContext,
  FC,
  memo,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
const CounterContext = createContext<CounterContextType>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});
type CounterContextPropsType = PropsWithChildren<{
  start?: number;
  step?: number;
}>;
export const CounterContextProvider: FC<
  CounterContextPropsType
> = memo(({ start = 0, step = 1, children }) => {
  const [count, setCount] = useState<number>(start);
  const increment = () => setCount((c) => c + step);
  const decrement = () => setCount((c) => c - step);
  const value = useMemo(
    () => ({
      count,
      increment,
      decrement,
    }),
    [count]
  );
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
});
export const useCounterContext = () => useContext(CounterContext);
