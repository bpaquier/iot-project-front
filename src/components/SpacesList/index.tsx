import classnames from "classnames/bind";
import css from "./styles.module.scss";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const cx = classnames.bind(css);

const officesList = [
  {
    id: 1,
    name: 'salle 1',
    etage: 'etage 1',
    coordonnées: 'xxxxx'
  },
  {
    id: 2,
    name: 'salle 2',
    etage: 'etage 1',
    coordonnées: 'xxxxx'
  },
  {
    id: 3,
    name: 'salle 1',
    etage: 'etage 2',
    coordonnées: 'xxxxx'
  },
  {
    id: 4,
    name: 'salle 2',
    etage: 'etage 2',
    coordonnées: 'xxxxx'
  }
]

// Utils for sorting offices by stage
function compareStage(stage, item) {
  return stage === item.etage;
}
function containStage(stage, items) {
  return items.some(compareStage.bind(null, stage));
}
function groupByStage(memo, item) {
  let stage = memo.filter(containStage.bind(null, item.etage));
  if (stage.length > 0) {
    stage[0].push(item);
  } else {
    memo.push([item]);
  }
  return memo;
}

let stagesList = officesList.reduce(groupByStage, []);
console.log(stagesList);

function SpacesList() {

  return (
    <div className={css.spacesMenu}>
      <h3 className={css.title}>étages</h3>
      {stagesList.map((stage, index) => {
        return (
          <div key={index}>
            <span>étage {index + 1}</span>
            <ul>
              {stage.map((office, index) => {
                return (
                  <li key={index}>
                    <Link href={`/exemple/${office.id}`}>{office.name}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default SpacesList;