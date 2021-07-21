import { useEffect } from "react";
import Head from "next/head";
import { useState } from "react";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import SearchBar from "~/components/SearchBar";

import LayoutContainer from "~/components/LayoutContainer";
import Card from "~/components/Card";

import Building from "~/components/Building";
import FluxeoPieChart from "~/components/FluxeoPieChart";
import OccupationCard from "~/components/OccupationCard";

export default function Home() {
  const [floorHovered, setFloorHovered] = useState(null);

  return (
    <LayoutContainer title="Accueil" className={css.container}>
      {/* <Card className={css.bureau} title="Nombre de bureau">
          <RoomNumber></RoomNumber>
        </Card> */}

      <Card className={css.occupation} title="Occupation du bâtiment">
        <OccupationCard />
      </Card>

      <Card className={css.persons} title="Nombre de personne dans l'étage">
        <FluxeoPieChart activeFloor={floorHovered} />
      </Card>

      <Card className={css.building} title="Image du batiment cliquable">
        <Building
          floorHovered={floorHovered}
          setFloorHovered={setFloorHovered}
          className={css.buildingImg}
        ></Building>
      </Card>

      <Card className={css.alerts} title="Listes des personnes"></Card>
    </LayoutContainer>
  );
}
