import classnames from "classnames/bind";
import css from "./styles.module.scss";
import Link from "next/link";

import ChevronIcon from "~/components/Svgs/ChevronIcon"

const cx = classnames.bind(css);

function ItemList({ style, label, url, withIcon }) {
  return (
    <li className={cx(css.item, style)}>
      <Link href={url}>
        <a className={css.itemName} title={label}>{label}</a>
      </Link>
      {withIcon &&
        <div className={css.chevronWrapper}>
          <ChevronIcon />
        </div>
      }
    </li>

  )
}

export default ItemList;
