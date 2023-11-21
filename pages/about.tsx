import Head from "next/head";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useTranslation("about");
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <div className="prose">
        <h1>{t("title-1")}</h1>
      </div>
    </>
  );
}
