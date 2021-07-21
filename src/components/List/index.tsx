import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);
import { useState } from "react";
// import Card from "~/components/Card";

function List() {
  const [employe, setEmploye] = useState([]);

  const employes = [
    { id: 1, name: "Roger MULER", profession: "Développeur" },
    { id: 2, name: "Roger MULER", profession: "CEO" },
    { id: 3, name: "Roger MULER", profession: "Développeur" },
    { id: 4, name: "Roger MULER", profession: "Développeur" },
    { id: 5, name: "Roger MULER", profession: "CEO" },
    { id: 6, name: "Roger MULER", profession: "Développeur" },
    { id: 7, name: "Roger MULER", profession: "Manager" },
    { id: 8, name: "Roger MULER", profession: "CEO" },
    { id: 9, name: "Roger MULER", profession: "Développeur" },
    { id: 10, name: "Roger MULER", profession: "Manager" },
    { id: 11, name: "Roger MULER", profession: "Designer" },
    { id: 12, name: "Roger MULER", profession: "Manager" },
    { id: 13, name: "Roger MULER", profession: "Manager" },
    { id: 14, name: "Roger MULER", profession: "Développeur" },
    { id: 15, name: "Roger MULER", profession: "Manager" },
    { id: 16, name: "Roger MULER", profession: "Développeur" },
    { id: 17, name: "Roger MULER", profession: "Développeur" },
    { id: 18, name: "Roger MULER", profession: "Manager" },
    { id: 19, name: "Roger MULER", profession: "Designer" },
    { id: 20, name: "Roger MULER", profession: "Designer" },
  ];

  const filter = [
    { id: 1, profession: "Développeur" },
    { id: 2, profession: "Manager" },
    { id: 3, profession: "CEO" },
    { id: 4, profession: "Designer" },
  ];

  const filterList = (e) => {
    // console.log(e.target.value)
    employes.filter((item) => {
      if (e.target.value == item.profession) {
        console.log(item);
        return item;
      } else {
        return employes;
      }
    });
  };

  return (
    <div className={css.card}>
      <div className={css.headList}>
        {/* <div>filter</div> */}
        {/* rajouter le composant filter */}
        <select onChange={filterList}>
          {filter.map((item) => (
            <option value={item.profession}>{item.profession}</option>
          ))}
        </select>
      </div>
      <div className={css.list}>
        <ul className={css.employes}>
          {employes.map((employe) => (
            <div className={css.employe} key={employe.id}>
              <span>{employe.name}</span>
              <span>{employe.profession}</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
