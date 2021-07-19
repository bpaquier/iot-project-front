import Head from "next/head";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import Header from "~/components/Header";
import Nav from "~/components/Nav";
import BaseComponent from "~/components/@BaseComponent";
import SearchBar from "~/components/SearchBar";

export default function Home() {
  return (
    <div className={css.container}>
      <Nav page="home" />
      <Header />
      <main className={css.main}>
      </main>
    </div>
  );
}
