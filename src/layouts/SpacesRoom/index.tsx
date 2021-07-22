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
import GraphPersons from "~/components/GraphPersons";
import CardList from "~/components/CardList";

import { useUpdatedPresence } from "~/hooks/useUpdatesPresence";

interface IProps {
  id_room: string;
  floor: number;
  roomsData?: any;
}

export default function SpacesRoom({ id_room, floor, roomsData }: IProps) {
  const { room, setRoom } = useContext(RoomContext);
  const [filteredList, setFilteredList] = useState([]);
  const { data } = useUpdatedPresence();
  const capacity = roomsData.find((room) => room.name == id_room).capacity;

  useEffect(() => {
    if (!data) return;
    const serializedList = data.filter(
      (item) => item?.position?.room == id_room
    );
    setFilteredList(serializedList);
  }, [data, id_room]);

  return (
    <LayoutContainer title={`Salle ${id_room}`} className={css.container}>
      <Card
        center={false}
        className={css.building}
        containerClassName={css.containerContent}
        title="Plan étage"
      >
        <Floor
          floor={floor}
          room={room}
          setRoom={setRoom}
          className={css.test}
        ></Floor>
      </Card>

      <Card className={css.persons} title="Nombre personnes dans la salle">
        <GraphPersons persons={filteredList.length} capacity={capacity} />
      </Card>

      <div className={css.listContainer}>
        <CardList
          title="Liste des personnes"
          className={css.list}
          list={filteredList}
        />
      </div>

      <Card className={css.occupation} title="Fréquentation">
        <BusyTimesGraph />
      </Card>
    </LayoutContainer>
  );
}
