import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { LANG_EN } from "../i18n";

const useCurrentLang = () => {
  const [cookie] = useCookies(["lang"]);
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState(LANG_EN);

  useEffect(() => {
    const { user } = cookie;
    const { locale } = router;

    if (user && user.lang) {
      setCurrentLang(user.lang);
    } else if (locale) {
      setCurrentLang(locale);
    } else setCurrentLang(LANG_EN);
  }, []);

  return currentLang;
};

export default useCurrentLang;
