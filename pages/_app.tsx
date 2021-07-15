import Head from "next/head";
import type { AppProps } from "next/app";

import "~/styles/globals.scss";

import Footer from "~/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IOT - Groupe2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
