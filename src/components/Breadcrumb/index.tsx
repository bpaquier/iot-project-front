import { useState, useContext } from "react";
import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

// Context
import { PageContext } from "~/contexts/pageContext";
import { RoomContext } from "~/contexts/roomContext";
import { FloorContext } from "~/contexts/floorContext";

import { SPACES_ROOM, SPACES_FLOOR, HOME } from "~/data/page";

import ArrowIcon from "~/components/Svgs/arrow-right";

interface Breadcrumb {
  className?: string;
  step?: string;
  roomName?: string;
  spaceData?: any;
  isOpen?: boolean;
  toggleIsOpen?: any;
}

function Breadcrumb({
  step = "Etage 2",
  roomName = "Bureau 3",
  spaceData,
  isOpen,
  toggleIsOpen
}: Breadcrumb) {
  // State
  const [homeItem, setHomeItem] = useState(false);
  const [stepItem, setStepItem] = useState(false);
  const [roomItem, setRoomItem] = useState(false);

  //Context
  const { page, setPage } = useContext(PageContext);
  const { room, setRoom } = useContext(RoomContext);
  const { floor, setFloor } = useContext(FloorContext);

  const printFloor = (floor) => {
    if (floor !== 0 && !floor) return;
    if (floor === 0) {
      return `RDC`;
    } else {
      return `Etage ${floor}`;
    }
  };

  const printRoom = (room_id) => {
    const roomData = spaceData.filter((room) => room.id_room === room_id)[0];

    if (roomData) {
      return `Salle ${roomData.name}`;
    } else {
      return "";
    }
  };

  const showRoom: boolean = room !== null && page !== SPACES_FLOOR;
  const isOnPageFloorOrRoom = page === SPACES_FLOOR || page === SPACES_ROOM;

  return (
    <div className={css.breadcrumb}>
      {/* Logo */}
      <h2
        className={cx(css.initial, {
          isActive: !isOnPageFloorOrRoom,
        })}
        onClick={() => {
          setPage(HOME);
          if (isOpen) {
            toggleIsOpen(!isOpen)
          }
        }}
      >
        Fluxeo
      </h2>
      {/* {Breadcrumb} */}
      {isOnPageFloorOrRoom && floor !== null && (
        <>
          <ArrowIcon />
          <span
            onClick={() => {
              setPage(SPACES_FLOOR);
              if (isOpen) {
                toggleIsOpen(!isOpen)
              }
            }}
            className={cx(css.initial, { isActive: !showRoom })}
          >
            {" "}
            {printFloor(floor)}
          </span>
          {showRoom && (
            <>
              <ArrowIcon />
              <span className={cx(css.initial, { isActive: showRoom })}>
                {" "}
                {printRoom(room)}
              </span>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Breadcrumb;
