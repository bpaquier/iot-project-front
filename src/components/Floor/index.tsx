import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);
import { useContext } from "react";

import { SPACES_ROOM } from "~/data/page";
import { ROOMS_DATA } from "./data";

import { PageContext } from "~/contexts/pageContext";

function Floor({ className, floor, room, setRoom }) {
  // Contexts
  const { page, setPage } = useContext(PageContext);

  // EtageX to change with correspondant value
  const viewBoxDatas = [
    "rez de chaussez",
    "0 0 1740 1018",
    "etage2",
    "etage3",
    "etage4",
    "etage5",
    "0 0 1697 792",
  ];
  return (
    <svg
      viewBox={viewBoxDatas[floor]}
      className={cx(className, css.floors)}
      style={{ backgroundImage: `url(./etage${floor}.png)` }}
    >
      {ROOMS_DATA[floor].map(({ path, id, name }) => (
        <path
          className={cx({ [css.visible]: room && room === id })}
          onClick={() => {
            setRoom(id);
            setPage(SPACES_ROOM);
          }}
          key={id}
          d={path}
        />
      ))}
    </svg>
  );
}

export default Floor;
