import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);


function Card({className, children }) {

  return <div 
        className={cx(className, css.card)}
        >
      {children}
  </div>
}

export default Card;
