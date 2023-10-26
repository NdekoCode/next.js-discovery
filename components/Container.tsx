import { FunctionComponent, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <section className="flex flex-col min-h-full">
      <Header />
      {children}
      <Footer/>
    </section>
  );
};
export default Container;
