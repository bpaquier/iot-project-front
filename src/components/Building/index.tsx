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
  /**
   * @todo: dinamycly get existing floor in DB
   */
  return (
    <div className={css.buildingContainer}>
      <svg viewBox="0 0 1224 838" className={cx(css.building, className)}>
        {FLOORS_DATA.map(({ path, id }) => (
          <path
            className={
              id === 0 || id === 2 || id === 3 || id === 5 || id === 4
                ? css.notInDb
                : ""
            }
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
