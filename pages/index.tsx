import Head from "next/head";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import Nav from "~/components/Nav";
import BaseComponent from "~/components/@BaseComponent";
import SearchBar from "~/components/SearchBar";

export default function Home() {
  return (
    <div className={css.container}>
      <Nav page="home" />
      <main className={css.main}>
        <BaseComponent />
        <SearchBar />
      </main>
    </div>
  );
}
