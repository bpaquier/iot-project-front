import { useState, useContext } from "react";
import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

// Context
import { PageContext } from "~/contexts/pageContext";
import { RoomContext } from "~/contexts/roomContext";
import { FloorContext } from "~/contexts/floorContext";

import ArrowIcon from "~/components/Svgs/arrow-right";

interface Breadcrumb {
  className?: string;
  step?: string;
  roomName?: string;
}

function Breadcrumb({ step = "Etage 2", roomName = "Bureau 3" }: Breadcrumb) {
  // State
  const [homeItem, setHomeItem] = useState(false);
  const [stepItem, setStepItem] = useState(false);
  const [roomItem, setRoomItem] = useState(false);

  //Context
  const { page, setPage } = useContext(PageContext);
  const { room, setRoom } = useContext(RoomContext);
  const { floor, setFloor } = useContext(FloorContext);

  const printFloor = (floor) => {
    if (floor === undefined) return;
    if (floor === 0) {
      return `Rez-de-chaussée`;
    } else {
      return `Etage ${floor}`;
    }
  };

  const printRoom = (room_id) => {
    if (room_id) {
      return `Salle ${room_id}`;
    } else {
      return "";
    }
  };

  return (
    <div className={css.breadcrumb}>
      <h2
        className={cx(css.initial, homeItem ? "isActive" : "")}
        onClick={() => {
          setHomeItem(true);
          setStepItem(false);
          setRoomItem(false);
        }}
      >
        Fluxeo
      </h2>
      <ArrowIcon />
      <span
        className={cx(css.initial, stepItem ? "isActive" : "")}
        onClick={() => {
          setHomeItem(false);
          setStepItem(true);
          setRoomItem(false);
        }}
      >
        {" "}
        {printFloor(floor)}
      </span>
      <ArrowIcon />
      <span
        className={cx(css.initial, roomItem ? "isActive" : "")}
        onClick={() => {
          setHomeItem(false);
          setStepItem(false);
          setRoomItem(true);
        }}
      >
        {" "}
        {printRoom(room)}
      </span>
    </div>
  );
}

export default Breadcrumb;
