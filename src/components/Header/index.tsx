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
      <h2 className={css.title}>Fluxeo</h2>
      <SearchBar />
    </header>
  );
};

export default Header;
