import React from "react";
import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

interface IProps {
  title?: string;
  children?: any;
}

export default function layoutContainer({title, children}) {
  return <main className={css.container}>
    <h1 className={css.title}>{title}</h1>
    {children}
  </main>
}