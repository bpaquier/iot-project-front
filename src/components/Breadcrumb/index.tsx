import React, { useState } from 'react';
import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);
import ArrowIcon from "~/components/Svgs/arrow-right";


interface Breadcrumb {
  className?: string;
  step?: string;
  room?: string;
}


function Breadcrumb({className, step = "Etage 2", room = "Bureau 3"}: Breadcrumb) {

  const [homeItem, setHomeItem] = useState(false);
  const [stepItem, setStepItem] = useState(false);
  const [roomItem, setRoomItem] = useState(false);

  return <div className={css.breadcrumb}>
      <h2 className={cx(css.initial, homeItem ? 'isActive' :  '')} onClick={() => {
        setHomeItem(true)
        setStepItem(false)
        setRoomItem(false)
      }}>Fluxeo</h2>
      <ArrowIcon/>
      <span className={cx(css.initial, stepItem ? 'isActive' :  '')} onClick={() => {
        setHomeItem(false)
        setStepItem(true)
        setRoomItem(false)
      }}> {step}</span>
      <ArrowIcon/>
      <span className={cx(css.initial, roomItem ? 'isActive' :  '')} onClick={() => {
        setHomeItem(false)
        setStepItem(false)
        setRoomItem(true)
      }}> {room}</span>
  </div>
  
}

export default Breadcrumb;
