import classnames from "classnames/bind";
import css from "./styles.module.scss";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import FluxeoIcon from "~/components/Svgs/FluxeoIcon";
import HomeIcon from "~/components/Svgs/HomeIcon";
import ClientsIcon from "~/components/Svgs/ClientsIcon";
import GraphIcon from "~/components/Svgs/GraphIcon";

interface NavProps {
  page: string;
  toggleListOfSpaces: any;
}

const cx = classnames.bind(css);

const navItems = [
  {
    icon: <HomeIcon />,
    title: "Accueil",
    active: false,
    url: "/",
    id: 0,
  },
  {
    icon: <ClientsIcon />,
    title: "Occupation des locaux",
    active: false,
    url: "/spaces",
    id: 1,
  },
  {
    icon: <GraphIcon />,
    title: "Moyennes hebdomadaires",
    active: false,
    url: "/stats",
    id: 2,
  },
];

function Nav({ page, toggleListOfSpaces }: NavProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);

  const item = useRef(null);

  const getActiveItem = () => {
    const [item]: any = navItems.filter((navItem) => {
      return navItem.url === page;
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
  }

  return (
    <div className={css.navBar}>
      <div className={css.mainIcon}>
        <Link href="/">
          <FluxeoIcon />
        </Link>
      </div>
      <nav className={css.nav}>
        <div className={css.selector} style={selectorStyle()}></div>

        {navItems.map((navItem, index) => {
          if(index !== 1) {
            return (
              <Link key={index} href={navItem.url}>
              <a
                ref={item}
                className={cx(css.navIcon, { active: activeItem === index })}
                title={navItem.title}
              >
                {navItem.icon}
              </a>
            </Link>
            )
          } else {
            return (
              <a
                key={index}
                ref={item}
                className={cx(css.navIcon, { active: activeItem === index })}
                title={navItem.title}
                onClick={toggleMenu}
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
