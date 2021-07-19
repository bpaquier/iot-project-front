import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

interface NavProps {
  className?: string;
}

function Nav({ className }: NavProps) {
  return <div className={cx(className, css.content)}>NAVBAR</div>;
}

export default Nav;
