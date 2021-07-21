import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);
import Card from "~/components/Card";


function List() {

  const employes = [
    {id: 1, name: "Roger MULER", profession: "Développeur"},
    {id: 2, name: "Roger MULER", profession: "Développeur"},
    {id: 3, name: "Roger MULER", profession: "Développeur"},
    {id: 4, name: "Roger MULER", profession: "Développeur"},
    {id: 5, name: "Roger MULER", profession: "Développeur"},
    {id: 6, name: "Roger MULER", profession: "Développeur"},
    {id: 7, name: "Roger MULER", profession: "Développeur"},
    {id: 8, name: "Roger MULER", profession: "Développeur"},
    {id: 9, name: "Roger MULER", profession: "Développeur"},
    {id: 10, name: "Roger MULER", profession: "Développeur"},
    {id: 11, name: "Roger MULER", profession: "Développeur"},
    {id: 12, name: "Roger MULER", profession: "Développeur"},
    {id: 13, name: "Roger MULER", profession: "Développeur"},
    {id: 14, name: "Roger MULER", profession: "Développeur"},
    {id: 15, name: "Roger MULER", profession: "Développeur"},
    {id: 16, name: "Roger MULER", profession: "Développeur"},
    {id: 17, name: "Roger MULER", profession: "Développeur"},
    {id: 18, name: "Roger MULER", profession: "Développeur"},
    {id: 19, name: "Roger MULER", profession: "Développeur"},
    {id: 20, name: "Roger MULER", profession: "Développeur"},
  ]

  return <Card className={css.card} title="Liste des personnes">
      <div className={css.headList}>
        {/* <div>filter</div> */}
        {/* rajouter le composant filter */}
      </div>
      <div className={css.list}>
        <ul className={css.employes}>
          {employes.map(employe => (
            <div className={css.employe} key={employe.id}>
              <span>{employe.name}</span>
              <span>{employe.profession}</span>
            </div>
          ))}
        </ul>
      </div>
    </Card>
}

export default List;