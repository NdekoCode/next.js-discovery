import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../../components/Header";

export default function Read() {
  const router: NextRouter = useRouter();
  useEffect(() => {
    console.log(router);
    console.log(router.route); // La route que l'on utilise, dans notre cas `/blog/[id]`
    console.log(router.asPath); // Nous permet de savoir sur quelle chemin on est
    console.log(router.query.id); // Va contenir les paramètres de l'URL et leurs valeur
  }, []);
  return (
    <>
      <Header />
      <div className="prose">
        <h1>Mon article </h1>
      </div>
    </>
  );
}
