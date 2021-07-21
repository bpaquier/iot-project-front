import Head from "next/head";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

import { useFetchRooms } from "~/hooks/useFetchRooms";

import "~/styles/globals.scss";

import Footer from "~/components/Footer";
import Nav from "~/components/Nav";
import Header from "~/components/Header";
import SpacesList from "~/components/SpacesList";

import PageContainer from "~/components/PageContainer";
import { PageContextProvider } from "~/contexts/pageContext";
import { FloorContextProvider } from "~/contexts/floorContext";
import { RoomContextProvider } from "~/contexts/roomContext";

function MyApp({ Component, pageProps }: AppProps) {
  // Grab the current route

  // Toggle spaces list
  const [toggleOpen, setToggleOpen] = useState(false);

  const [roomsData, isLoading] = useFetchRooms();

  const toggleListOfSpaces = (e) => {
    e.preventDefault();
    setToggleOpen(!toggleOpen);
  };

  useEffect(() => {}, [isLoading]);

  return (
    <>
      <Head>
        <title>IOT - Groupe2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContextProvider>
        <FloorContextProvider>
          <RoomContextProvider>
            {!isLoading && roomsData && (
              <>
                <Header spaceData={roomsData} />
                <Nav toggleListOfSpaces={toggleListOfSpaces} />
                <SpacesList
                  spaceData={roomsData}
                  isOpen={toggleOpen}
                  toggleIsOpen={setToggleOpen}
                />
                <PageContainer>
                  <Component {...pageProps} roomsData={roomsData} />
                </PageContainer>
                <Footer />
              </>
            )}
          </RoomContextProvider>
        </FloorContextProvider>
      </PageContextProvider>
    </>
  );
}
export default MyApp;
