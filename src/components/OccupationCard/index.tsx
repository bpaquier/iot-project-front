import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

interface Occupation {
  className?: string;
}

import ProfileIcon from "~/components/Svgs/ProfileIcon";

function OccupationCard() {
  return (
    <div className={css.occupation}>
      <div className={css.infoOccupation}>
        <ProfileIcon/>
        <div className={css.info}>
          <h2 className={css.infoNumber}>180</h2>
          <p className={css.infoText}>PERSONNES</p>
        </div>
      </div>
      <p className={css.lastText}>Dans le bâtiment au total</p>
    </div>
  )
}

export default OccupationCard