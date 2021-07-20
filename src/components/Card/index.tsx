import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

function Card({ className, children, title }) {
  return (
    <div className={cx(className, css.card)}>
      <h3>{title} </h3>
      {children}
    </div>
  );
}

export default Card;
