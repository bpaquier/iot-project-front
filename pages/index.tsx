import Head from "next/head";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import SearchBar from "~/components/SearchBar";

import LayoutContainer from "~/components/LayoutContainer";
import Card from "~/components/Card";
import GraphCircle from "~/components/GraphCircle";

export default function Home() {
  return (
    <div className={css.container}>
      <LayoutContainer title="Dashboard">
        <main className={css.main}></main>
      </LayoutContainer>
      <Card className={css.bureau}>
        <h3>Nombre de bureau</h3>
        <div className={css.desk}>
          <p className={css.deskCount}>5</p>
          <p className={css.deskText}>Salles</p>
        </div>
      </Card>

      <Card className={css.bureau}>
        <h3>Nombre de personne dans l’étage </h3>
        <GraphCircle/>
      </Card>

    </div>
  );
}
