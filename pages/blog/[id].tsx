import { NextRouter, useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";
import Header from "../../components/Header";

export default function Read({
  id,
}: PropsWithChildren<{ id?: string | number }>) {
  const router: NextRouter = useRouter();
  useEffect(() => {
    console.log(router);
  }, []);
  return (
    <>
      <Header />
      <div className="prose">
        <h1>Mon article {id}</h1>
      </div>
    </>
  );
}
