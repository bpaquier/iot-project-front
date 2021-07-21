import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);
import { useContext } from "react";

import { HOME, SPACES_FLOOR, SPACES_ROOM } from "~/data/page";
import { ROOMS_DATA } from "./data";

import { PageContext } from "~/contexts/pageContext";
import { FloorContext } from "~/contexts/floorContext";
import { RoomContext } from "~/contexts/roomContext";

function Floor({ className }) {
  // Contexts
  const { page, setPage } = useContext(PageContext);
  const { floor, setFloor } = useContext(FloorContext);
  const { room, setRoom } = useContext(RoomContext);

  return (
    <div className={css.floorsContainer}>
      <svg
        viewBox="0 0 1740 1018"
        className={cx(css.first, className, css.floors)}
      >
        {ROOMS_DATA[floor].map(({ path, id }) => (
          <path
            className={cx({ [css.visible]: room === id })}
            onClick={() => {
              setRoom(id);
              setPage(SPACES_ROOM);
            }}
            key={id}
            d={path}
          />
        ))}
      </svg>

      {/* {floor === 2 && (
        <svg
          viewBox="0 0 1697 792"
          className={cx(css.second, className, css.floors)}
        >
          <path d="M821.948 97.545L809.991 46.3697L1508.03 9.05464L1670.71 229.234L1220.73 257.419L1195.81 204.646L1195.23 203.423L1193.88 203.504L859.88 223.504L857.495 223.646L858.056 225.97L872.058 283.911L868.642 284.532L867 284.831V286.5V288.12L99.5424 335.838L106.45 305.443L107.041 302.846L104.382 303.003L22.6486 307.84L67.0575 141.916L820.111 99.9969L822.49 99.8645L821.948 97.545Z" />
          <path d="M1207.68 261.835L1274.97 408.195L922.534 431.395L885.94 285.513L885.56 284H884H879.104L866.96 229.35L1191.26 209.081L1214.11 258.038L1209.11 259.039L1206.63 259.535L1207.68 261.835Z" />
          <path d="M25.0303 672.804L97.63 342.401L868.446 293.602L942.51 603.682L25.0303 672.804Z" />
        </svg>
      )} */}
    </div>
  );
}

export default Floor;
