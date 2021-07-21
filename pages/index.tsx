import { useEffect } from "react";
import Head from "next/head";
import { useState } from "react";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import SearchBar from "~/components/SearchBar";
import { useUpdatedPresence } from "~/hooks/useUpdatesPresence";
import Ratio from "~/components/Ratio";

import LayoutContainer from "~/components/LayoutContainer";
import Card from "~/components/Card";

import Building from "~/components/Building";
import FluxeoPieChart from "~/components/FluxeoPieChart";
import OccupationCard from "~/components/OccupationCard";
import List from "~/components/CardList";

export default function Home() {
  const [floorHovered, setFloorHovered] = useState(null);
  const list = useUpdatedPresence();

  return (
    <LayoutContainer title="Accueil" className={css.container}>
      <Ratio ratio={0.9} className={cx(css.homeItem, css.building)}>
        <Card title="Image du batiment cliquable" className={css.cardBuilding}>
          <Building
            floorHovered={floorHovered}
            setFloorHovered={setFloorHovered}
            className={css.buildingImg}
          ></Building>
        </Card>
      </Ratio>
      <Card
        className={cx(css.homeItem, css.occupation)}
        title="Occupation du bâtiment"
      >
        <OccupationCard />
      </Card>

      <Card
        className={cx(css.homeItem, css.persons)}
        title="Nombre de personne dans l'étage"
      >
        <FluxeoPieChart activeFloor={floorHovered} />
      </Card>
      <div className={css.listContainer}>
        <List title="Liste des personnes" className={css.list} list={list} />
      </div>
    </LayoutContainer>
  );
}
