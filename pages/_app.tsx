import Head from "next/head";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import "~/styles/globals.scss";

import Footer from "~/components/Footer";
import Nav from "~/components/Nav";
import PageContainer from "~/components/PageContainer";

function MyApp({ Component, pageProps }: AppProps) {
  // Grab the current route
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>IOT - Groupe2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav page={pathname} />
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
      <Footer />
    </>
  );
}
export default MyApp;
