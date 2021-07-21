import classnames from "classnames/bind";
import css from "./styles.module.scss";
import Link from "next/link";

import ChevronIcon from "~/components/Svgs/ChevronIcon";

const cx = classnames.bind(css);

interface ListItemProps {
  className?: string;
  label?: string;
  url?: string;
  withIcon?: boolean;
  openFloor?: any;
  index?: number;
  isOpen?: boolean;
}

function ItemList({
  className,
  label,
  url,
  withIcon,
  openFloor,
  index,
  isOpen,
}: ListItemProps) {
  return (
    <li className={cx(css.item, className)}>
      <Link href={url}>
        <a className={css.itemName} title={label}>
          {label}
        </a>
      </Link>
      {withIcon && (
        <div
          className={css.chevronWrapper}
          onClick={() => {
            if (isOpen) {
              openFloor(null);
              return;
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
