import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);
import { useState, useRef } from "react";
import classNames from "classnames";
import { useEffect, useContext } from "react";
import { FloorContext } from "~/contexts/floorContext/index";
import { RoomContext } from "~/contexts/roomContext/index";
import { PageContext } from "~/contexts/pageContext/index";
import { SPACES_ROOM } from "~/data/page";
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
  const { floor, setFloor } = useContext(FloorContext);
  const { room, setRoom } = useContext(RoomContext);
  const { page, setPage } = useContext(PageContext);

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

  const handleClick = (employee) => {
    setRoom(employee.position.room_id);
    setFloor(employee.position.floor);
    setPage(SPACES_ROOM);
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
        <ul className={css.employees}>
          {employeesList?.map((employee, i) => (
            <div
              className={css.employee}
              key={i}
              onClick={() => handleClick(employee)}
            >
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
