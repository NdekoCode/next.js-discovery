import { FunctionComponent, PropsWithChildren } from "react";
import Header from "./Header";

const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Container;
