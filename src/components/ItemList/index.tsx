import classnames from "classnames/bind";
import css from "./styles.module.scss";
import { useContext } from "react";

import { PageContext } from "~/contexts/pageContext";
import ChevronIcon from "~/components/Svgs/ChevronIcon";
import { SPACES_FLOOR, SPACES_ROOM } from "~/data/page";

const cx = classnames.bind(css);

interface ListItemProps {
  className?: string;
  label?: string;
  withIcon?: boolean;
  openFloor?: any;
  selectedItem?: string;
  generalKey?: string;
  index?: number;
  isOpen?: boolean;
  isFloor?: boolean;
  handleClick?: (e: any) => void;
}

function ItemList({
  className,
  label,
  handleClick,
  withIcon,
  openFloor,
  selectedItem,
  generalKey,
  index,
  isOpen,
  isFloor,
}: ListItemProps) {

  const { page, setPage } = useContext(PageContext);

  const isOnRoomPage = page === SPACES_ROOM;
  const isOnFloorPage = page === SPACES_FLOOR;
  const floorSelectedCondition = selectedItem == generalKey && isOnFloorPage;
  const roomSelectedCondition = selectedItem === generalKey && isOnRoomPage;
  const condition = isFloor ? floorSelectedCondition : roomSelectedCondition;

  return (
    <li className={cx(css.item, className)}>
      <a
        className={cx(css.itemName, condition ? css.itemNameSelected : null)}
        onClick={handleClick}
        title={label}
      >
        {label}
      </a>

      {withIcon && (
        <div
          className={cx(
            css.chevronWrapper,
            isOpen ? css.chevronWrapperOpen : null
          )}
          onClick={() => {
            if (isOpen) {
              openFloor(null);
            }
            openFloor(index);
          }}
        >
          <ChevronIcon />
        </div>
      )}
    </li>
  );
}

export default ItemList;
