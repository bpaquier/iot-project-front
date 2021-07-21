import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);
import { useState, useRef } from "react";
import classNames from "classnames";
import { useEffect } from "react";
// import Card from "~/components/Card";

interface ListProps {
  className?: string;
  title?: string;
  list?: any;
}

function List({ className, title, list }: ListProps) {
  const data = list;
  const [employeesList, setEmployeesList] = useState([]);
  const [services, setServices] = useState([]);
  const [serviceSelected, setServiceSelected] = useState(null);

  useEffect(() => {
    if (!data) return;
    setEmployeesList(data);
    const getServices = data
      .map((item) => item?.service)
      .reduce(
        (unique, item) => (unique?.includes(item) ? unique : [...unique, item]),
        []
      );
    setServices(getServices);
  }, [data]);

  useEffect(() => {
    if (!serviceSelected || serviceSelected === "all") {
      setEmployeesList(data);
    } else {
      const filteredEmployees = data.filter(
        (employee) => employee.service === serviceSelected
      );
      setEmployeesList(filteredEmployees);
    }
  }, [serviceSelected]);

  const filterList = (e) => {
    setServiceSelected(e.target.value);
  };

  return (
    <div className={cx(css.card, className)}>
      <div className={css.headList}>
        {title && <h3 className={css.title}>{title}</h3>}
        <select onChange={filterList} className={css.select}>
          <option value={"all"}> -- service -- </option>
          {services?.map((service, i) => (
            <option key={i} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>
      <div className={css.list}>
        <ul className={css.employes}>
          {employeesList?.map((employee, id) => (
            <div className={css.employe} key={id}>
              <span>
                {employee.first_name} {employee.last_name}
              </span>
              <span className={css.service}>{employee.service}</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
