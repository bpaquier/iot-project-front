import { useRouter } from "next/router";
import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import LayoutContainer from "~/components/LayoutContainer";

import Card from "~/components/Card";
import Etages from "~/components/Etages"
import RoomNumber from "~/components/RoomNumber";
import BusyTimesGraph from "~/components/BusyTimesGraph";


export default function Floor() {
  const router = useRouter();
  const { uid } = router.query;

  return (
    <LayoutContainer title="Occupation des bureaux" className={css.container}>
      <div>
        <span>Salle {uid}</span>
        <BusyTimesGraph />
      </div>
      <Card center={false} className={css.building} title="Plan étage">
        <Etages className={css.test} etage={1}></Etages>
      </Card>

      <Card className={css.persons} title="Nombre personnes étage">
      </Card>

      <Card className={css.bureau} title="Nombre de bureau">
        <RoomNumber nbOfRooms={5} />
      </Card>

      <Card className={css.occupation} title="Taux occupation"></Card>

    </LayoutContainer>
  );
}
