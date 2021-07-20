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
import Building from "~/components/Building";
import OccupationCard from "~/components/OccupationCard";

export default function Home() {
  return (
      <LayoutContainer title="Acceuil" className={css.container}>
    
        {/* <Card className={css.bureau} title="Nombre de bureau">
          <RoomNumber></RoomNumber>
        </Card> */}

        <Card className={css.occupation} title='Occupation du bâtiment'>
          <OccupationCard />
        </Card>

        <Card className={css.persons} title="Nombre de personne dans l'étage">
          <GraphPersons/>
        </Card>

        <Card className={css.building} title="Image du batiment cliquable">
           <Building className={css.buildingImg}></Building>
        </Card>

        <Card className={css.alerts} title="Listes des personnes">
        
        </Card>

      </LayoutContainer>
  );
}
