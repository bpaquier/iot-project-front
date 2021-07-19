import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

<<<<<<< HEAD
import FluxeoIcon from "~/components/Svgs/FluxeoIcon";
import HomeIcon from "~/components/Svgs/HomeIcon";
import ClientsIcon from "~/components/Svgs/ClientsIcon";
import GraphIcon from "~/components/Svgs/GraphIcon";
=======
import { useRouter } from "next/router";

import FluxeoIcon from "~/components/Svgs/FluxeoIcon"
import HomeIcon from "~/components/Svgs/HomeIcon"
import ClientsIcon from "~/components/Svgs/ClientsIcon"
import GraphIcon from "~/components/Svgs/GraphIcon"
>>>>>>> components/nav

interface NavProps {
  page?: string;
}

<<<<<<< HEAD
function Nav(props: NavProps) {
=======
function Nav({ page }) {
>>>>>>> components/nav
  return (
    <div className={css.navBar}>
      <div className={css.mainIcon}>
        <FluxeoIcon />
      </div>
      <nav className={css.nav}>
        <a className={cx(css.navIcon, page == "home" ? css.navIconActive : null)} href="/" title="Accueil">
          <HomeIcon />
        </a>
        <a className={cx(css.navIcon, page == "spaces" ? css.navIconActive : null)} href="/spaces" title="Occupation des locaux">
          <ClientsIcon />
        </a>
        <a className={cx(css.navIcon, page == "stats" ? css.navIconActive : null)} href="/stats" title="Moyennes hebdomadaires">
          <GraphIcon />
        </a>
      </nav>
    </div>
  );
}

export default Nav;
