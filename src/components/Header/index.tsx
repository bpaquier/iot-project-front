import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import SearchBar from "~/components/SearchBar"
import Breadcrumb from "~/components/Breadcrumb"

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  return (
    <header className={css.header}>
      <Breadcrumb />
      <SearchBar />
    </header>
  );
};

export default Header;
