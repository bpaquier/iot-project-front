import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import LayoutContainer from "~/components/LayoutContainer";

import Card from "~/components/Card";
import RoomNumber from "~/components/RoomNumber";

export default function Spaces() {
  return (
    <LayoutContainer title="Occupation des bureaux" className={css.container}>
      <Card className={css.building} title="Plan étage"></Card>

      <Card className={css.bureau} title="Nombre de bureau">
        <RoomNumber nbOfRooms={5} />
      </Card>

      <Card className={css.persons} title="Nombre personnes étage"></Card>

      <Card className={css.occupation} title="Taux occupation"></Card>
    </LayoutContainer>
  );
}
