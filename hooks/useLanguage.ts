import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const {i18n} = useTranslation()
  const [userLanguage, setUserLanguage] = useState("en");

  useEffect(() => {
    const userSelectedLanguage =
      window.localStorage.getItem("userLanguage") || "en";
    setUserLanguage(userSelectedLanguage);
  }, []);

  const handleLanguageChange = (lng: string) => {
    setUserLanguage(lng);
    i18n.changeLanguage(lng)
    window.localStorage.setItem("userLanguage", JSON.stringify(lng));
  };

  return { userLanguage, handleLanguageChange };
};
