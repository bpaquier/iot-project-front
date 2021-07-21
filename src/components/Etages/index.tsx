import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);


interface BaseComponentProps {
    className?: string;
}

function Etages({className, etage = 1}) {

    
      return (
          <div>
              {(etage === 1) && 
              <svg viewBox="0 0 1740 1018" className={cx(css.first, className, css.etages)}>
                <path d="M111.71 454.021L22.3539 467.133L51.2677 262.286L846.759 158.483L849.186 158.167L848.392 155.851L842.5 138.667V129.5V129.086L842.335 128.706L828.894 97.6522L1147.41 57.6526L1287.35 308.948L1266.71 312.022L1264.14 312.404L1265.16 314.788L1265.64 315.908L501.702 431.022L499.824 431.305L500.01 433.196L502.824 461.805L108.698 521.146L113.993 456.162L114.198 453.656L111.71 454.021Z"/>
                <path d="M70.7416 913.065L107.343 529.74L503.735 468.795L542.313 828.361L70.7416 913.065Z"/>
                <path d="M1047.85 735.945L566.241 822.654L521.209 434.688L923.649 373.727L1047.85 735.945Z"/>
                <path d="M1001.82 537.252L942.7 371.614L1269.41 322.188L1353.91 478.488L1001.82 537.252Z"/>
                <path d="M1295.07 307.32L1154.69 56.106L1519.66 9.12463L1714.7 245.538L1295.07 307.32Z"/>
            </svg>}

            {(etage === 2 && 
            <svg viewBox="0 0 1697 792" className={cx(css.second, className, css.etages)}>
                <path d="M821.948 97.545L809.991 46.3697L1508.03 9.05464L1670.71 229.234L1220.73 257.419L1195.81 204.646L1195.23 203.423L1193.88 203.504L859.88 223.504L857.495 223.646L858.056 225.97L872.058 283.911L868.642 284.532L867 284.831V286.5V288.12L99.5424 335.838L106.45 305.443L107.041 302.846L104.382 303.003L22.6486 307.84L67.0575 141.916L820.111 99.9969L822.49 99.8645L821.948 97.545Z"/>
                <path d="M1207.68 261.835L1274.97 408.195L922.534 431.395L885.94 285.513L885.56 284H884H879.104L866.96 229.35L1191.26 209.081L1214.11 258.038L1209.11 259.039L1206.63 259.535L1207.68 261.835Z"/>
                <path d="M25.0303 672.804L97.63 342.401L868.446 293.602L942.51 603.682L25.0303 672.804Z"/>
            </svg>)} 
        </div>
    )
    }
    
export default Etages;