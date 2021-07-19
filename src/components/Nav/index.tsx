import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import FluxeoIcon from "~/components/Svgs/FluxeoIcon"
import HomeIcon from "~/components/Svgs/HomeIcon"
import ClientsIcon from "~/components/Svgs/ClientsIcon"
import GraphIcon from "~/components/Svgs/GraphIcon"

interface NavProps {
  className?: string;
}

function Nav() {
  return (
    <div className={css.navBar}>
      <div className={css.mainIcon}>
        <FluxeoIcon />
      </div>
      <nav className={css.nav}>
        <div className={css.navIcon}>
          <HomeIcon />
        </div>
        <div className={css.navIcon}>
          <ClientsIcon />
        </div>
        <div className={css.navIcon}>
          <GraphIcon />
        </div>
      </nav>
    </div>);
}

export default Nav;
