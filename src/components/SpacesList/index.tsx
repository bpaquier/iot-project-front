import classnames from "classnames/bind";
import css from "./styles.module.scss";
import { useState, useContext, useEffect } from "react";

import { FloorContext } from "~/contexts/floorContext/index";
import { RoomContext } from "~/contexts/roomContext/index";
import { PageContext } from "~/contexts/pageContext/index";

import { HOME, STATS, SPACES_FLOOR, SPACES_ROOM } from "~/data/page";
import { roomsData } from "~/data/room";

import ItemList from "~/components/ItemList";

interface SpacesListProps {
  isOpen: boolean;
  spaceData: any;
  toggleIsOpen: (x: boolean) => void;
}

const cx = classnames.bind(css);

// Utils for sorting rooms by floors
function groupByFloor(data) {
  const newArr = [];

  data.forEach((room) => {
    if (newArr[room.floor]?.length >= 0) {
      newArr[room.floor].push(room);
    } else {
      newArr[room.floor] = [];
      newArr[room.floor].push(room);
    }
  });

  newArr.forEach((floor) => {
    floor.sort((a: any, b: any): any => {
      return parseFloat(a.name) - parseFloat(b.name);
    });
  });

  return newArr;
}

function SpacesList({ isOpen, spaceData, toggleIsOpen }: SpacesListProps) {
  const [activeFloor, setActiveFloor] = useState();
  const { floor, setFloor } = useContext(FloorContext);
  const { room, setRoom } = useContext(RoomContext);
  const { page, setPage } = useContext(PageContext);

  let floorsList = groupByFloor(spaceData);

  const printFloor = (floor) => {
    if (floor === 0) {
      return "RDC";
    } else {
      return `Étage ${floor}`;
    }
  };

  useEffect(() => {
    const isOnPageFloorOrRoom = page === SPACES_FLOOR || page === SPACES_ROOM;
    if (!isOnPageFloorOrRoom) {
      toggleIsOpen(false);
    }
  }, [page]);

  useEffect(() => {
        
  }, [isOpen])

  return (
    <div className={cx(css.spacesMenu, isOpen ? css.spacesMenuOpen : null)}>
        <div className={cx(css.layer, {[css.visible]: isOpen })} onClick={()=>{
          toggleIsOpen(false);
        }} >
        </div>
      <h3 className={css.title}>étages</h3>
      {floorsList.map((f, index) => {
        const heightItem = {
          heightLabel: 40,
          heightRoom: 25,
        };
        const heightFloor =
          heightItem.heightLabel + f.length * heightItem.heightRoom;
          
        return (
          <ul
            className={cx(
              css.floor,
              activeFloor === index ? css.floorOpen : null
            )}
            style={activeFloor === index ? { height: `${heightFloor}px` } : null}
            key={index}
          >
            <ItemList
              className={css.itemFloor}
              label={printFloor(index)}
              index={index}
              handleClick={() => {
                setPage(SPACES_FLOOR);
                setFloor(index);
                toggleIsOpen(false);                
                  setActiveFloor(null)
              }}
              withIcon={true}
              isOpen={activeFloor === index}
              openFloor={setActiveFloor}
              generalKey={f[0].floor}
              selectedItem={floor}
              isFloor={true}
            />
            <li>
              <ul>
                {f.map((r, index) => {
                  return (
                    <ItemList
                      className={css.itemRoom}
                      label={`Salle ${r.name}`}
                      handleClick={() => {
                        setPage(SPACES_ROOM);
                        setFloor(r.floor);
                        setRoom(r.id_room);
                        toggleIsOpen(false)
                      }}
                      withIcon={false}
                      generalKey={r.id_room}
                      selectedItem={room}
                      key={index}
                      isFloor={false}
                    />
                  );
                })}
              </ul>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default SpacesList;
