import classnames from "classnames/bind";
import { useState, useEffect } from "react";
import css from "./styles.module.scss";
const cx = classnames.bind(css);


function GraphOccupation({persons = 90, capacity = 1800}) {

	const [progression, setProgression] = useState(360);
	const [occupation, setOccupation] = useState(0);
	
  	const graphstyle = {
		strokeDashoffset: progression  
  	}

	  const calculateStrokeWidth = () => {
		let percent = Math.round((persons * 100) / capacity); 
		let strokePercent = (percent * 360) / 100;
		return  360 - strokePercent + 20;
	  }

	  const calculateOccupationPercent = () => {
		  return Math.round((persons * 100) / capacity);
	  }

	  useEffect(() => {
		setProgression(calculateStrokeWidth())
		setOccupation(calculateOccupationPercent());
	  }, [])
  

  return <div className={css.circleBig}>
			<div className={css.text}>
				{occupation}%<div className={css.small}>d’occupation</div>
			</div>
			<svg>
				<circle style={graphstyle} className={css.progress} cx="50%" cy="50%" r="60">
					<div className={css.test}></div>
				</circle>
			</svg>
		</div>


}

export default GraphOccupation;
