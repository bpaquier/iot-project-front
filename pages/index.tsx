import Head from "next/head";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import SearchBar from "~/components/SearchBar";

import LayoutContainer from "~/components/LayoutContainer";
import Card from "~/components/Card";
import GraphPersons from "~/components/GraphPersons";
import GraphOccupation from "~/components/GraphOccupation";
import RoomNumber from "~/components/RoomNumber";

export default function Home() {
  return (
    <div className={css.container}>
      <LayoutContainer title="Dashboard">
        <main className={css.main}></main>
      </LayoutContainer>
      <Card className={css.bureau}>
        <RoomNumber></RoomNumber>
      </Card>

      <Card className={css.bureau} title="Nombre de personne dans l'étage">
        <GraphPersons/>
      </Card>

      <Card className={css.bureau} title="Taux d’occupation de l’étage">
        <GraphOccupation/>
      </Card>

    </div>
  );
}
