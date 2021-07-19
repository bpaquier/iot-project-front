import Head from "next/head";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import Nav from "~/components/Nav";
import BaseComponent from "~/components/@BaseComponent";
import SearchBar from "~/components/SearchBar";
import LayoutContainer from "~/components/LayoutContainer";

export default function Home() {
  return (
    <div className={css.container}>
        <Nav />
        <LayoutContainer title="Dashboard">
          <main className={css.main}>
            <BaseComponent />
            <SearchBar />
          </main>
        </LayoutContainer>
    </div>
  );
}
