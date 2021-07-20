import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import LayoutContainer from "~/components/LayoutContainer";

import Card from "~/components/Card";
import Etages from "~/components/Etages"


export default function Spaces() {
  return (
    
    <LayoutContainer title="Occupation des bureaux" className={css.container}>
    
    <Card className={css.building} title="Plan étage">
      <Etages etage={1}></Etages>
    </Card>

    <Card className={css.bureau} title="Nombre de bureau">
    </Card>

    <Card className={css.persons} title="Nombre personnes étage">
    </Card>

    <Card className={css.occupation} title="Taux occupation">
    </Card>


  </LayoutContainer>
  
  );
}
