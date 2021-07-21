import classnames from "classnames/bind";
import css from "./styles.module.scss";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import ChevronIcon from "~/components/Svgs/ChevronIcon"
import ItemList from "~/components/ItemList"

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

function SpacesList() {

  return (
    <div className={css.spacesMenu}>
      <h3 className={css.title}>étages</h3>
      {stagesList.map((stage, index) => {
        return (
          <ul className={css.stage} key={index}>
            <ItemList style="css.itemStage" label={`Étage ${index + 1}`} url={`/stages`} withIcon={true} />
            <li>
              <ul>
                {stage.map((office, index) => {
                  return (
                    <ItemList style="css.itemOffice" label={office.name} url={`/exemple/${office.id}`} withIcon={false} />
                  )
                })}
              </ul>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default SpacesList;