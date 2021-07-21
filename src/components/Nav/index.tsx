import classnames from "classnames/bind";
import css from "./styles.module.scss";

import { useState, useEffect, useRef, useContext } from "react";
import { PageContext } from "~/contexts/pageContext";
import { HOME, SPACES_FLOOR, SPACES_ROOM, STATS } from "~/data/page";

import FluxeoIcon from "~/components/Svgs/FluxeoIcon";
import HomeIcon from "~/components/Svgs/HomeIcon";
import ClientsIcon from "~/components/Svgs/ClientsIcon";
import GraphIcon from "~/components/Svgs/GraphIcon";

interface NavProps {
  toggleListOfSpaces: any;
}

const cx = classnames.bind(css);

const navItems = [
  {
    icon: <HomeIcon />,
    title: "Accueil",
    active: false,
    page: HOME,
    id: 0,
  },
  {
    icon: <ClientsIcon />,
    title: "Occupation des locaux",
    active: false,
    page: SPACES_FLOOR,
    id: 1,
  },
  {
    icon: <GraphIcon />,
    title: "Moyennes hebdomadaires",
    active: false,
    page: STATS,
    id: 2,
  },
];

function Nav({ toggleListOfSpaces }: NavProps) {
  //State
  const [activeItem, setActiveItem] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);

  //Context
  const { page, setPage } = useContext(PageContext);

  useEffect(() => {
    if (page === SPACES_FLOOR || page === SPACES_ROOM) {
      setActiveItem(1);
    }
  }, [page]);

  // Refs
  const item = useRef(null);

  const getActiveItem = () => {
    const [item]: any = navItems.filter((navItem) => {
      return navItem.page === page;
    });

    if (item) setActiveItem(item.id);
  };

  const getItemHeight = () => {
    setItemHeight(item.current.getBoundingClientRect().height);
  };

  const selectorStyle = () => {
    return {
      ["--item-height" as any]: `${itemHeight}px`,
      ["--active-item" as any]: `${activeItem}`,
    };
  };

  useEffect(() => {
    getActiveItem();
    getItemHeight();
  }, [page]);

  const toggleMenu = (e) => {
    toggleListOfSpaces(e);
  };

  return (
    <div className={css.navBar}>
      <div onClick={() => setPage(HOME)} className={css.mainIcon}>
        <FluxeoIcon />
      </div>
      <nav className={css.nav}>
        <div className={css.selector} style={selectorStyle()}></div>

        {navItems.map((navItem, index) => {
          if (index !== 1) {
            return (
              <a
                key={index}
                onClick={() => setPage(navItem.page)}
                ref={item}
                className={cx(css.navIcon, { active: activeItem === index })}
                title={navItem.title}
              >
                {navItem.icon}
              </a>
            );
          } else {
            return (
              <a
                key={index}
                ref={item}
                className={cx(css.navIcon, { active: activeItem === index })}
                title={navItem.title}
                onClick={(e) => {
                  toggleMenu(e);
                }}
              >
                {navItem.icon}
              </a>
            );
          }
        })}
      </nav>
    </div>
  );
}

export default Nav;
