import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import SearchBar from "~/components/SearchBar"

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  return (
    <header className={css.header}>
      <span>Fluxeo</span>
      <SearchBar />
    </header>
  );
};

export default Header;
