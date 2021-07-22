import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import SearchBar from "~/components/SearchBar";
import Breadcrumb from "~/components/Breadcrumb";

interface HeaderProps {
  spaceData: any;
  isOpen: boolean;
  toggleIsOpen: any;
}

function Header({ spaceData, isOpen, toggleIsOpen }: HeaderProps) {
  return (
    <header className={css.header}>
      <Breadcrumb spaceData={spaceData} isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
      <SearchBar />
    </header>
  );
}

export default Header;
