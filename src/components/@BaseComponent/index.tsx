import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);
import Ratio from "~/components/Ratio";
interface BaseComponentProps {
  className?: string;
}

function BaseComponent({ className }: BaseComponentProps) {
  return <div className={cx(className, css.content)}>exemple</div>;
}

export default BaseComponent;
