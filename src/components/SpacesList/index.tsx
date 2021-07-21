import classnames from "classnames/bind";
import css from "./styles.module.scss";
import { useState, useContext } from "react";

import { FloorContext } from "~/contexts/floorContext/index";
import { RoomContext } from "~/contexts/roomContext/index";
import { PageContext } from "~/contexts/pageContext/index";

import { HOME, STATS, SPACES_FLOOR, SPACES_ROOM } from "~/data/page";
import { roomsData } from "~/data/room";

import ItemList from "~/components/ItemList";

interface SpacesListProps {
  isOpen: boolean;
  spaceData: any;
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
      console.log(parseFloat(a.name), parseFloat(b.name));
      return parseFloat(a.name) - parseFloat(b.name);
    });
  });

  return newArr;
}

function SpacesList({ isOpen, spaceData }: SpacesListProps) {
  const [activeFloor, setActiveFloor] = useState();
  const [selectedItem, setSelectedItem] = useState("");
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

  return (
    <div className={cx(css.spacesMenu, isOpen ? css.spacesMenuOpen : null)}>
      <h3 className={css.title}>étages</h3>
      {floorsList.map((floor, index) => {
        const heightItem = {
          heightLabel: 40,
          heightRoom: 25,
        };
        const heightFloor =
          heightItem.heightLabel + floor.length * heightItem.heightRoom;

        return (
          <ul
            className={cx(
              css.floor,
              activeFloor == index ? css.floorOpen : null
            )}
            style={activeFloor == index ? { height: `${heightFloor}px` } : null}
            key={index}
          >
            <ItemList
              className={css.itemFloor}
              label={printFloor(index)}
              index={index}
              handleClick={() => {
                setPage(SPACES_FLOOR);
                setFloor(index);
                setSelectedItem(`etage-${index}`);
              }}
              withIcon={true}
              isOpen={activeFloor == index}
              openFloor={setActiveFloor}
              generalKey={`etage-${index}`}
              selectedItem={selectedItem}
            />
            <li>
              <ul>
                {floor.map((room, index) => {
                  return (
                    <ItemList
                      className={css.itemRoom}
                      label={`Salle ${room.name}`}
                      handleClick={() => {
                        setPage(SPACES_ROOM);
                        setFloor(index);
                        setRoom(room.id_room);
                        setSelectedItem(`salle-${index}-${room.name}`);
                      }}
                      withIcon={false}
                      generalKey={`salle-${index}-${room.name}`}
                      selectedItem={selectedItem}
                      key={index}
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
