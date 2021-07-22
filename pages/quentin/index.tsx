import { useState } from "react";
import AlertsList from "~/components/AlertsList";

const alertsData = [
  {
    id: 1,
    type: "error",
    order: 1,
    message: "Error message",
    height: 50,
    isVisible: true,
  },
  {
    id: 2,
    type: "info",
    order: 2,
    message: "Info message",
    height: 50,
    isVisible: true,
  },
  {
    id: 3,
    type: "warning",
    order: 3,
    message: "Warning message",
    height: 50,
    isVisible: true,
  },
  {
    id: 4,
    type: "success",
    order: 4,
    message: "Success message",
    height: 50,
    isVisible: true,
  },
];

export default function Floor() {
  const [alerts, setAlerts] = useState(alertsData);

  const removeAlert = (id: number) => {
    const newArr = alerts.map((alert, i) => {
      if (alert.id < id) {
        return alert;
      } else if (alert.id == id) {
        return {
          ...alert,
          isVisible: false,
        };
      } else if (alert.id > id) {
        console.log("-1");
        return {
          ...alert,
          order: alert.order - 1,
        };
      }
    });
    setAlerts(newArr);
  };
  return (
    <div>
      <AlertsList alerts={alerts} removeAlert={removeAlert} />
    </div>
  );
}
