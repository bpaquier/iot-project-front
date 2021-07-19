import Head from "next/head";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import Nav from "~/components/Nav";
import SearchBar from "~/components/SearchBar";
import LayoutContainer from "~/components/LayoutContainer";
import Card from "~/components/Card";

export default function Home() {
  return (
    <div className={css.container}>
        <Nav />
        <LayoutContainer title="Dashboard">
          <main className={css.main}>
            <SearchBar />
          </main>
        </LayoutContainer>
        <Card className={css.bureau}> 
          <h3>
            Nombre de bureau
        </h3> 
          <div className={css.desk}>
          <p className={css.deskCount}>5</p>
          <p className={css.deskText}>Salles</p>
        </div>
        </Card>
    </div>
  );
}
