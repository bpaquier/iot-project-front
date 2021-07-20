import classnames from "classnames/bind";
import css from "./styles.module.scss";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import ChevronIcon from "~/components/Svgs/ChevronIcon"
import ItemList from "~/components/ItemList"

interface SpacesListProps {
  isOpen: boolean;
}

const cx = classnames.bind(css);

const roomsList = [
  {
    id_room: 1,
    name: '101',
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 5,
    floor: 1,
  },
  {
    id_room: 2,
    name: '201',
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 4,
    floor: 2,
  },
  {
    id_room: 3,
    name: '102',
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 8,
    floor: 1,
  },
  {
    id_room: 4,
    name: '301',
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 9,
    floor: 3,
  },
  {
    id_room: 5,
    name: '202',
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 6,
    floor: 2,
  },
  {
    id_room: 6,
    name: '203',
    coordinates: { XMin: 50, XMax: 70, YMin: 20, YMax: 40 },
    capacity: 7,
    floor: 2,
  }
]

// Utils for sorting offices by stage
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

function SpacesList({isOpen}: SpacesListProps) {

  const [toggleFloor, setToggleFloor] = useState(false)

  const openFloor = () => {
    setToggleFloor(!toggleFloor)
  }

  return (
    <div className={cx(css.spacesMenu, isOpen ? css.spacesMenuOpen : null)}>
      <h3 className={css.title}>étages</h3>
      {floorsList.map((floor, index) => {

        const heightItem = {
          heightLabel: 40,
          heightRoom: 25
        };
        const heightFloor = heightItem.heightLabel + (floor.length * heightItem.heightRoom);

        return (
          <ul
            className={cx(css.floor, toggleFloor ? css.floorOpen : null)}
            style={toggleFloor ? {height:`${heightFloor}px`} : null}
            key={index}
            onClick={openFloor}>
            <ItemList
              className={css.itemFloor}
              label={`Étage ${index + 1}`}
              url={`/floor/${index + 1}`}
              withIcon={true} />
            <li>
              <ul>
                {floor.map((room, index) => {
                  return (
                    <ItemList
                      className={css.itemRoom}
                      label={`Salle ${room.name}`}
                      url={`/room/${room.id_room}`}
                      withIcon={false}
                      key={index} />
                  )
                })}
              </ul>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default SpacesList;