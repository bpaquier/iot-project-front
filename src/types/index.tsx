// Types

type AlertType = "success" | "error" | "warning" | "info";

//Interfaces

export interface IAlert {
  id: number;
  type: AlertType;
  order: number;
  message: string;
  height: number;
  isVisible: boolean;
}
