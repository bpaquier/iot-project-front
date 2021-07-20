import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);


function RoomNumber() {

  return <div 
        >
        <div className={css.desk}>
    <p className={css.deskCount}>5</p>
    <p className={css.deskText}>Salles</p>
  </div>
  </div>
}

export default RoomNumber;
