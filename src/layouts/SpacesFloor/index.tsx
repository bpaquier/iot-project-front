import React from "react";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import LayoutContainer from "~/components/LayoutContainer";
import BusyTimesGraph from "~/components/BusyTimesGraph";
import RoomNumber from "~/components/RoomNumber";
import Card from "~/components/Card";
import Floor from "~/components/Floor";

interface IProps {
  floor: number;
}

export default function SpacesRoom({ floor }: IProps) {
  return (
    <LayoutContainer title="Occupation des bureaux" className={css.container}>
      <Card center={false} className={css.building} title="Plan étage">
        <Floor className={css.test}></Floor>
      </Card>
      <Card className={css.persons} title="Nombre personnes étage"></Card>

      <Card className={css.bureau} title="Nombre de bureau">
        <RoomNumber nbOfRooms={5} />
      </Card>

      <Card className={css.occupation} title="Taux occupation"></Card>
    </LayoutContainer>
  );
}
