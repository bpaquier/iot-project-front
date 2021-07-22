import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import { useState, useEffect, useContext } from "react";

import { FLOORS_DATA } from "./data";
import { SPACES_FLOOR } from "~/data/page";

import { FloorContext } from "~/contexts/floorContext";
import { PageContext } from "~/contexts/pageContext";

function Building({ className, floorHovered, setFloorHovered }) {
  const [floorSelected, setFloorSelected] = useState(null);

  const { floor, setFloor } = useContext(FloorContext);
  const { page, setPage } = useContext(PageContext);

  const printFloor = (floor: number) => {
    if (floor === 0) {
      return "Rez-de-chaussée";
    } else {
      return `<span>${floor}</span> ème étage`;
    }
  };

  return (
    <div className={css.buildingContainer}>
      <svg viewBox="0 0 1224 838" className={cx(css.building, className)}>
        {FLOORS_DATA.map(({ path, id }) => (
          <path
            onClick={() => {
              setFloorSelected(id);
              setPage(SPACES_FLOOR);
              setFloor(id);
            }}
            onMouseEnter={() => {
              setFloorHovered(id);
            }}
            onMouseLeave={() => {
              setFloorHovered(null);
            }}
            key={id}
            d={path}
          />
        ))}
      </svg>

      {floorHovered !== null ? (
        <p className={css.text}>
          {floorHovered === 0 ? (
            "Rez de chaussée"
          ) : (
            <>
              Étage <span>{floorHovered}</span>
            </>
          )}
        </p>
      ) : (
        <p className={css.text}>Sélectionnez un étage</p>
      )}
    </div>
  );
}

export default Building;
