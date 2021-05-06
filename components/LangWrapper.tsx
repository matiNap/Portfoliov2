import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import { LANG_EN, LANG_PL } from '../i18n';
import useCurrentLang from '../hooks/useCurrentLang';

interface Props {
  children: ReactNode;
}

const LangWrapper = ({ children }: Props) => {
  const router = useRouter();
  const [cookie, setCookie] = useCookies(['lang']);
  const { i18n } = useTranslation();
  const currentLang = useCurrentLang();
  const { pathname } = useRouter();
  useEffect(() => {
    const { locale } = router;
    const { user } = cookie;

    if (locale && pathname !== '/404') {
      if (!user || !user.lang)
        setCookie('lang', JSON.stringify({ lang: locale }));
      i18n.changeLanguage(currentLang);

      if (currentLang)
        router.replace(
          `${currentLang === LANG_EN ? '' : LANG_PL}${router.pathname}`,
        );
    }
  }, [currentLang]);
  return <>{children}</>;
};

export default LangWrapper;
