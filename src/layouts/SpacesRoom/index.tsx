import React, { useContext, useState, useEffect } from "react";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import { RoomContext } from "~/contexts/roomContext";

import LayoutContainer from "~/components/LayoutContainer";
import RoomNumber from "~/components/RoomNumber";
import Card from "~/components/Card";
import Floor from "~/components/Floor";
import BusyTimesGraph from "~/components/BusyTimesGraph";
import Ratio from "~/components/Ratio";
import OccupationCard from "~/components/OccupationCard";

import { useUpdatedPresence } from "~/hooks/useUpdatesPresence";

interface IProps {
  id_room: string;
  floor: number;
}

export default function SpacesRoom({ id_room, floor }: IProps) {
  const { room, setRoom } = useContext(RoomContext);
  const [filteredList, setFilteredList] = useState([]);
  const { data } = useUpdatedPresence();

  useEffect(() => {
    if (!data) return;
    const serializedList = data.filter(
      (item) => item?.position?.floor == floor
    );
    setFilteredList(serializedList);
  }, [data]);
  return (
    <LayoutContainer title={`Salle id: ${id_room}`} className={css.container}>
      <Ratio ratio={0.52} className={css.building}>
        <Card center={false} className={css.card} title="Plan étage">
          <Floor
            floor={floor}
            room={room}
            setRoom={setRoom}
            className={css.test}
          ></Floor>
        </Card>
      </Ratio>
      <Card className={css.persons} title="Nombre personnes étage">
        <OccupationCard quantity={filteredList?.length} />
      </Card>

      <Card className={css.bureau} title="Nombre de bureau">
        <RoomNumber nbOfRooms={5} />
      </Card>

      <Card className={css.occupation} title="Fréquentation">
        <BusyTimesGraph />
      </Card>
    </LayoutContainer>
  );
}
