import classnames from "classnames/bind";
import css from "./styles.module.scss";
import { useState } from "react";
const cx = classnames.bind(css);

import LayoutContainer from "~/components/LayoutContainer";
import Card from "~/components/Card";

import Building from "~/components/Building";
import FluxeoPieChart from "~/components/FluxeoPieChart";
import OccupationCard from "~/components/OccupationCard";

interface IProps {
  className?: string;
}

function Home({ className }: IProps) {
  const [floorHovered, setFloorHovered] = useState(null);
  //toast.success("Successfully toasted!");;

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

      <Card className={css.alerts} title="Listes des personnes">
        {/* <Toaster position="top-center" reverseOrder={false} /> */}
      </Card>
    </LayoutContainer>
  );
}

export default Home;
