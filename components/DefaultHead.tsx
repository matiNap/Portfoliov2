import Head from "next/head";
import React from "react";
import { NextSeo } from "next-seo";

const DESCRIPTION = "Hi, I' m Mateusz, Front End Developer ";

export default () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <NextSeo
      title="Mateusz Napieralski | Portfolio"
      description={DESCRIPTION}
    />
  </>
);
