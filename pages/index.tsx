import Head from "next/head";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import BaseComponent from "~/components/@BaseComponent";

export default function Home() {
  return (
    <div className={css.container}>
      <main className={css.main}>
        <BaseComponent />
      </main>
    </div>
  );
}
