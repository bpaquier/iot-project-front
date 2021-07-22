import React, { useState, useEffect, useContext } from "react";
import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);
import Search from "~/components/Svgs/SearchIcon";

import { useUpdatedPresence } from "~/hooks/useUpdatesPresence";

import { FloorContext } from "~/contexts/floorContext/index";
import { RoomContext } from "~/contexts/roomContext/index";
import { PageContext } from "~/contexts/pageContext/index";

import { SPACES_ROOM } from "~/data/page";

export default function SearchBar() {
  const [isActive, setActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const list = useUpdatedPresence();
  const [filteredList, setFilteredList] = useState([]);

  const [activeFloor, setActiveFloor] = useState();
  const { floor, setFloor } = useContext(FloorContext);
  const { room, setRoom } = useContext(RoomContext);
  const { page, setPage } = useContext(PageContext);

  useEffect(() => {
    if (!list.data) return;
    const serializedList = list.data.filter((item) => item.is_present);
    setFilteredList(serializedList);
  }, [list.data]);

  const search = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    let searchList = list.data.filter((item) => item.is_present);
    if (e.target.value) {
      searchList = searchList.filter((item) => {
        return [item.first_name, item.last_name, item.service].some((key) =>
          key.toLowerCase().includes(String(e.target.value).toLowerCase())
        );
      });
    }
    setFilteredList(searchList);
  };

  const searchPerson = (person) => {
    console.log("clic");
    setSearchValue(`${person.first_name} ${person.last_name}`);
    setFloor(person.position.floor);
    setRoom(person.position.room_id);
    setPage(SPACES_ROOM);
    setActiveFloor(null);
    setActive(false);
  };

  const listItems = filteredList.map((item) => (
    <button
      className={css.listItem}
      onMouseDown={() => searchPerson(item)}
      value={item}
      key={item.id_employee}
    >
      <span>
        {item.first_name} {item.last_name}
      </span>
      <span>{item.service}</span>
    </button>
  ));

  return (
    <div className={cx(css.searchBar, isActive ? css.red : null)}>
      <Search />
      <input
        onChange={(e) => search(e)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className={css.input}
        type="search"
        value={searchValue}
        placeholder="Rechercher par nom, équipe..."
        autoComplete="off"
      />
      {listItems.length > 0 && isActive && (
        <div className={css.list}>{listItems}</div>
      )}
    </div>
  );
}
