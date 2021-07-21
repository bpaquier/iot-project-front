import classnames from "classnames/bind";
import css from "./styles.module.scss";
import Link from "next/link";

import ChevronIcon from "~/components/Svgs/ChevronIcon";

const cx = classnames.bind(css);

interface ListItemProps {
  className?: string;
  label?: string;
  withIcon?: boolean;
  openFloor?: any;
  index?: number;
  isOpen?: boolean;
  handleClick?: (e: any) => void;
}

function ItemList({
  className,
  label,
  handleClick,
  withIcon,
  openFloor,
  index,
  isOpen,
}: ListItemProps) {
  return (
    <li className={cx(css.item, className)}>
      <a className={css.itemName} onClick={handleClick} title={label}>
        {label}
      </a>

      {withIcon && (
        <div
          className={css.chevronWrapper}
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
