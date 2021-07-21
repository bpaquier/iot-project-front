import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

interface Occupation {
  className?: string;
  quantity?: number;
  withText?: boolean;
}

import ProfileIcon from "~/components/Svgs/ProfileIcon";

function OccupationCard({ className, quantity, withText = true }: Occupation) {
  return (
    <div className={css.occupation}>
      <div className={css.infoOccupation}>
        <ProfileIcon />
        <div className={css.info}>
          <h2 className={css.infoNumber}>{quantity}</h2>
          <p className={css.infoText}>PERSONNES</p>
        </div>
      </div>
      {withText && <p className={css.lastText}>Dans le bâtiment au total</p>}
    </div>
  );
}

export default OccupationCard;
