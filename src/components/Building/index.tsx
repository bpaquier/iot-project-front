import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import { useState, useEffect } from "react";

function Building({ className, floorHovered, setFloorHovered }) {
  const [floorSelected, setFloorSelected] = useState(null);

  const printFloor = (floor: number) => {
    if (floor === 0) {
      return "Rez-de-chaussée";
    } else {
      return `<span>${floor}</span> ème étage`;
    }
  };

  return (
    <div className={css.buildingContainer}>
      <svg viewBox="0 0 1224 838" className={cx(css.building, className)}>
        <path
          data-floor={0}
          onClick={() => {
            setFloorSelected(0);
          }}
          onMouseEnter={() => {
            setFloorHovered(0);
          }}
          onMouseLeave={() => {
            setFloorHovered(null);
          }}
          d="M1191.41 683.772L1187.11 772.753L854.243 732.015L852.715 731.828L852.143 733.257L825.722 799.309L590.268 767.518L589.01 767.348L588.321 768.413L545.018 835.336L39.9168 761.758L35.6147 674.283L544.25 738.484L545.399 738.629L546.097 737.704L591.394 677.636L828.238 708.983L829.75 709.183L830.343 707.777L856.76 645.159L1191.41 683.772Z"
        />

        <path
          data-floor={1}
          onClick={() => {
            setFloorSelected(1);
          }}
          onMouseEnter={() => {
            setFloorHovered(1);
          }}
          onMouseLeave={() => {
            setFloorHovered(null);
          }}
          d="M1197.4 573.792L1191.61 683.767L859.232 645.013L857.757 644.841L857.165 646.204L829.767 709.319L593.763 678.017L592.632 677.867L591.927 678.765L545.126 738.374L35.411 674.225L30.1194 571.76L543.269 631.487L544.288 631.605L544.979 630.847L590.303 581.089L827.804 604.49L829.291 604.637L829.853 603.252L856.287 538.145L1197.4 573.792Z"
        />

        <path
          data-floor={2}
          onClick={() => {
            setFloorSelected(2);
          }}
          onMouseEnter={() => {
            setFloorHovered(2);
          }}
          onMouseLeave={() => {
            setFloorHovered(null);
          }}
          d="M1201.42 469.336L1197.09 574.285L857.212 538.011L855.704 537.85L855.142 539.26L829.199 604.362L591.696 581.01L590.698 580.911L590.022 581.652L544.213 631.895L29.8993 572.207L23.6323 464.222L544.802 515.99L545.737 516.083L546.406 515.423L588.239 474.081L828.806 497.491L830.179 497.624L830.792 496.388L858.189 441.105L1201.42 469.336Z"
        />

        <path
          data-floor={3}
          onClick={() => {
            setFloorSelected(3);
          }}
          onMouseEnter={() => {
            setFloorHovered(3);
          }}
          onMouseLeave={() => {
            setFloorHovered(null);
          }}
          d="M1205.42 380.857L1201.59 469.335L859.665 441.007L858.306 440.894L857.705 442.118L830.321 497.864L590.71 472.511L589.768 472.411L589.094 473.078L545.762 515.917L23.4177 464.18L19.1041 371.197L540.321 417.992L541.199 418.071L541.849 417.476L587.703 375.567L832.33 396.493L833.445 396.588L834.11 395.687L862.956 356.573L1205.42 380.857Z"
        />

        <path
          data-floor={4}
          onClick={() => {
            setFloorSelected(4);
          }}
          onMouseEnter={() => {
            setFloorHovered(4);
          }}
          onMouseLeave={() => {
            setFloorHovered(null);
          }}
          d="M864.917 261.55L1210.9 279.394L1205.61 380.86L864.142 356.505L863.059 356.428L862.404 357.294L830.586 399.392L590.71 374.011L589.768 373.911L589.094 374.578L545.752 417.427L18.9215 371.659L14.5963 272.66L540.853 311.495L541.6 311.55L542.2 311.1L587.602 277.049L836.856 294.995L837.9 295.07L838.557 294.255L864.917 261.55Z"
        />

        <path
          data-floor={5}
          onClick={() => {
            setFloorSelected(5);
          }}
          onMouseEnter={() => {
            setFloorHovered(5);
          }}
          onMouseLeave={() => {
            setFloorHovered(null);
          }}
          d="M865.698 159.031L1216.89 173.912L1211.11 279.399L866.104 261.503L865.084 261.45L864.443 262.245L838.099 294.93L588.143 277.005L587.406 276.952L586.811 277.392L541.407 310.952L13.9126 272.634L9.10431 172.622L539.888 202.497L540.578 202.536L541.145 202.14L588.572 169.04L834.875 184.496L835.68 184.547L836.295 184.024L865.698 159.031Z"
        />

        <path
          data-floor={6}
          onClick={() => {
            setFloorSelected(6);
          }}
          onMouseEnter={() => {
            setFloorHovered(6);
          }}
          onMouseLeave={() => {
            setFloorHovered(null);
          }}
          d="M1222 57.5L1217.09 173.908L866.093 157.502L865.326 157.466L864.732 157.953L834.844 182.452L588.133 166.004L587.401 165.956L586.811 166.392L541.388 199.965L8.90697 172.097L3.08269 56.0966L121.922 30.455L123.5 30.1145V28.5V20.6345L215.172 2.00592L674.441 15.4991L674.944 15.5139L675.394 15.2889L687.947 9.0128L1222 23.4467V57.4591V57.5Z"
        />
      </svg>
      {floorHovered !== null && (
        <p
          className={css.text}
          dangerouslySetInnerHTML={{ __html: printFloor(floorHovered) }}
        ></p>
      )}
      {floorHovered === null && (
        <p className={css.text}>Selectionnez un étage</p>
      )}
    </div>
  );
}

export default Building;
