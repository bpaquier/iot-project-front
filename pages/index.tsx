import Head from "next/head";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import Nav from "~/components/Nav";
import SearchBar from "~/components/SearchBar";
import LayoutContainer from "~/components/LayoutContainer";
import Card from "~/components/Card";
import GraphPersons from "~/components/GraphPersons";
import GraphOccupation from "~/components/GraphOccupation";

export default function Home() {
  return (
    <div className={css.container}>
      <LayoutContainer title="Dashboard">
        <main className={css.main}>
          <SearchBar />
        </main>
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
        <GraphPersons/>
      </Card>

      <Card className={css.bureau}>
        <h3>Nombre de personne dans l’étage </h3>
        <GraphOccupation/>
      </Card>

    </div>
  );
}
