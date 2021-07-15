import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

interface BaseComponentProps {
  className?: string;
}

function BaseComponent({ className }: BaseComponentProps) {
  return (
    <div className={cx(className, css.content)}>Let's do magic things</div>
  );
}

export default BaseComponent;
