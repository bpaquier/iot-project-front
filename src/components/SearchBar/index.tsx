import React, { useState } from 'react';
import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);
import Search from "~/components/Svgs/SearchIcon";


export default function SearchBar() {

  const [isActive, setActive] = useState(false);
  const [searchValue, setIsSeachValue] = useState('');

  const checkIsFocus = () => {
    if(searchValue.length <= 0){
      setActive(false)
    }
  }

  return <div className={cx(css.searchBar, isActive ? css.red : null)} >
    <Search/>
    <input 
      onChange={(e) => setIsSeachValue(e.target.value)} 
      onBlur={checkIsFocus} onFocus={() => setActive(true)} 
      className={css.input} 
      type="text" 
      placeholder="Rechercher par nom, équipe..."/>
  </div>
}