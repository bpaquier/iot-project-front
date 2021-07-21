import React, { useContext, useState, useEffect } from "react";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import { RoomContext } from "~/contexts/roomContext";
import { useFetchRooms } from "~/hooks/useFetchRooms";

import LayoutContainer from "~/components/LayoutContainer";
import RoomNumber from "~/components/RoomNumber";
import Card from "~/components/Card";
import Floor from "~/components/Floor";
import CardList from "~/components/CardList";
import GraphPersons from "~/components/GraphPersons";

import { useUpdatedPresence } from "~/hooks/useUpdatesPresence";

interface IProps {
  floor: number;
  roomsData?: any;
}

export default function SpacesRoom({ floor, roomsData }: IProps) {
  const { room, setRoom } = useContext(RoomContext);
  const [filteredList, setFilteredList] = useState([]);
  const [capacity, setCapacity] = useState(null);
  const { data } = useUpdatedPresence();

  useEffect(() => {
    if (!roomsData) return;
    const floorCapacity = roomsData
      .filter((room) => room.floor === floor)
      .map((item) => item.capacity)
      .reduce((a, b) => a + b, 0);
    setCapacity(floorCapacity);
  }, [roomsData]);

  useEffect(() => {
    if (!data) return;
    const serializedList = data.filter(
      (item) => item?.position?.floor == floor
    );
    setFilteredList(serializedList);
  }, [data]);

  useEffect(() => {
    /**
     * @todo get floor capacity
     */
  }, [filteredList]);

  return (
    <LayoutContainer title="Occupation des bureaux" className={css.container}>
      <Card
        center={false}
        className={css.building}
        containerClassName={css.containerContent}
        title="Plan étage"
      >
        <Floor
          floor={floor}
          room={null}
          setRoom={setRoom}
          className={css.test}
        ></Floor>
      </Card>
      <Card className={css.persons} title="Nombre personnes étage">
        <GraphPersons persons={filteredList?.length} capacity={capacity} />
      </Card>

      <Card className={css.bureau} title="Nombre de bureau">
        <RoomNumber nbOfRooms={5} />
      </Card>
      <div className={css.listContainer}>
        <CardList
          title="Liste des personnes"
          className={css.list}
          list={filteredList}
        />
      </div>
    </LayoutContainer>
  );
}
