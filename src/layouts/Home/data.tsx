import { IAlert } from "~/types";

export const alertsData: any = [
  {
    id: 1,
    type: "error",
    order: 1,
    message: "Le taux d’occupation du bâtiment est de 108%.",
    height: 50,
    isVisible: true,
  },
  {
    id: 2,
    type: "info",
    order: 2,
    message: "Le taux d’occupation du bâtiment est de 50%.",
    height: 50,
    isVisible: true,
  },
  {
    id: 3,
    type: "warning",
    order: 3,
    message: "Le taux d’occupation du bâtiment est de 90%",
    height: 50,
    isVisible: true,
  },
  {
    id: 4,
    type: "success",
    order: 4,
    message: "La salle B203 s’est libérée.",
    height: 50,
    isVisible: true,
  },
];
