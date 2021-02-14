import Head from "next/head";

import Footer from "./components/Footer";
import Background from "./components/Background";

export default function Home() {
  return (
    <Background>
      <h2>test</h2>
      <Footer isHidden />
    </Background>
  );
}
