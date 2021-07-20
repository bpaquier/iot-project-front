import classnames from "classnames/bind";
import css from "./styles.module.scss";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import ChevronIcon from "~/components/Svgs/ChevronIcon"
import ItemList from "~/components/ItemList"

interface SpacesListProps {
  isOpen: boolean;
}

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
  },
  {
    id: 5,
    name: 'salle 1',
    etage: 'etage 3',
    coordonnées: 'xxxxx'
  },
  {
    id: 6,
    name: 'salle 3',
    etage: 'etage 2',
    coordonnées: 'xxxxx'
  },
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

function SpacesList({isOpen}: SpacesListProps) {

  const [toggleStage, setToggleStage] = useState(false)

  const openStage = () => {
    setToggleStage(!toggleStage)
  }

  return (
    <div className={cx(css.spacesMenu, isOpen ? css.spacesMenuOpen : null)}>
      <h3 className={css.title}>étages</h3>
      {stagesList.map((stage, index) => {

        const heightItem = {
          heightLabel: 40,
          heightOffice: 25
        };
        const heightStage = heightItem.heightLabel + (stage.length * heightItem.heightOffice);

        return (
          <ul
            className={cx(css.stage, toggleStage ? css.stageOpen : null)}
            style={toggleStage ? {height:`${heightStage}px`} : null}
            key={index}
            onClick={openStage}>
            <ItemList
              className={css.itemStage}
              label={`Étage ${index + 1}`}
              url={`/spaces/${index + 1}`}
              withIcon={true} />
            <li>
              <ul>
                {stage.map((office, index) => {
                  return (
                    <ItemList
                      className={css.itemOffice}
                      label={office.name}
                      url={`/spaces/${office.id}`}
                      withIcon={false}
                      key={index} />
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