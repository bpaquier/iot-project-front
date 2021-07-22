import classnames from "classnames/bind";
import { useState, useEffect, useContext } from "react";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

interface GraphPersonsProps {
  persons?: number;
  capacity?: number;
}

function GraphPersons({ persons, capacity }: GraphPersonsProps) {

  const [progression, setProgression] = useState(360);

  
  
  const graphstyle = {
    strokeDashoffset: progression,
  };

  const calculateStrokeWidth = () => {
    let percent = Math.round((persons * 100) / capacity);

    console.log(persons);
    let strokeNumber = (percent * 360) / 100;
    
    return 360 - strokeNumber + 20;
  };

  useEffect(() => {    
    setProgression(calculateStrokeWidth());
  }, [persons]);

  return (
    <div className={css.circleBig}>
      <div className={css.text}>
        {persons}/<div className={css.small}>{capacity}</div>
      </div>
      <svg>
        <circle className={css.bg} cx="50%" cy="50%" r="60"></circle>
        <circle
          style={graphstyle}
          className={css.progress}
          cx="50%"
          cy="50%"
          r="60"
        ></circle>
      </svg>
    </div>
  );
}

export default GraphPersons;
