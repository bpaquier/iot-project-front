import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

interface IProps {
  nbOfRooms: number;
}

function RoomNumber({ nbOfRooms }: IProps) {
  return (
    <div>
      <div className={css.desk}>
        <p className={css.deskCount}>{nbOfRooms}</p>
        <p className={css.deskText}>Salles</p>
      </div>
    </div>
  );
}

export default RoomNumber;
