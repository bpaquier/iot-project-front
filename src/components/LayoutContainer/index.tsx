import React from "react";
import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

interface IProps {
  title?: string;
  children?: any;
  className?: any;
}

export default function LayoutContainer({className, title, children}) {
  return (
  <main  className={css.main}>
    <h1 className={css.title}>{title}</h1>
    <div className={className}>
      {children}
    </div>
  </main>
  )
}