import classnames from "classnames/bind";
import css from "./styles.module.scss";
import { useState, useContext } from "react";

import { FloorContext } from "~/contexts/floorContext/index";
import { RoomContext } from "~/contexts/roomContext/index";
import { PageContext } from "~/contexts/pageContext/index";

import { HOME, STATS, SPACES_FLOOR, SPACES_ROOM } from "~/data/page";

import ItemList from "~/components/ItemList";

interface SpacesListProps {
  isOpen: boolean;
}

const cx = classnames.bind(css);

const roomsList = [
  {
    id_room: 1,
    name: "101",
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 5,
    floor: 1,
  },
  {
    id_room: 2,
    name: "201",
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 4,
    floor: 2,
  },
  {
    id_room: 3,
    name: "102",
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 8,
    floor: 1,
  },
  {
    id_room: 4,
    name: "301",
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 9,
    floor: 3,
  },
  {
    id_room: 5,
    name: "202",
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 6,
    floor: 2,
  },
  {
    id_room: 6,
    name: "203",
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 7,
    floor: 2,
  },
  {
    id_room: 7,
    name: "401",
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 6,
    floor: 4,
  },
  {
    id_room: 8,
    name: "402",
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 7,
    floor: 4,
  },
  {
    id_room: 9,
    name: "501",
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 7,
    floor: 5,
  },
  {
    id_room: 10,
    name: "502",
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 7,
    floor: 5,
  },
  {
    id_room: 11,
    name: "601",
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 7,
    floor: 6,
  },
  {
    id_room: 12,
    name: "504",
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 9,
    floor: 5,
  },
  {
    id_room: 12,
    name: "602",
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 9,
    floor: 6,
  },
  {
    id_room: 12,
    name: "503",
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 9,
    floor: 5,
  },
];

// Utils for sorting rooms by floors
function compareFloor(floor, item) {
  return floor === item.floor;
}
function containFloor(floor, items) {
  return items.some(compareFloor.bind(null, floor));
}
function groupByFloor(memo, item) {
  let floor = memo.filter(containFloor.bind(null, item.floor));
  if (floor.length > 0) {
    floor[0].push(item);
  } else {
    memo.push([item]);
  }
  return memo;
}

let floorsList = roomsList.reduce(groupByFloor, []);

function SpacesList({ isOpen }: SpacesListProps) {
  const [activeFloor, setActiveFloor] = useState();
  const [selectedItem, setSelectedItem] = useState("");

  const { floor, setFloor } = useContext(FloorContext);
  const { room, setRoom } = useContext(RoomContext);
  const { page, setPage } = useContext(PageContext);

  return (
    <div className={cx(css.spacesMenu, isOpen ? css.spacesMenuOpen : null)}>
      <h3 className={css.title}>étages</h3>
      {floorsList.map((floor, index) => {
        const heightItem = {
          heightLabel: 40,
          heightRoom: 25,
        };
        const heightFloor = heightItem.heightLabel + floor.length * heightItem.heightRoom;

        return (
          <ul
            className={cx(
              css.floor,
              activeFloor == index ? css.floorOpen : null,
            )}
            style={activeFloor == index ? { height: `${heightFloor}px` } : null}
            key={index}
          >
            <ItemList
              className={css.itemFloor}
              label={`Étage ${index + 1}`}
              index={index}
              handleClick={() => {
                setPage(SPACES_FLOOR);
                setFloor(index + 1);
                setSelectedItem(`etage-${index}`)
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
                        setFloor(index + 1);
                        setRoom(room.id_room);
                        setSelectedItem(`salle-${index}-${room.name}`)
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
