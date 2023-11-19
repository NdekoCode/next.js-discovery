import { FunctionComponent, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
      {children}</div>
      <Footer/>
    </section>
  );
};
export default Container;
