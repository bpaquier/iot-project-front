type weekDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

interface DaysData {
  att: weekDay;
  text: string;
}

export const DAYS: Array<DaysData> = [
  {
    text: "L",
    att: "monday",
  },
  {
    text: "M",
    att: "monday",
  },
  {
    text: "M",
    att: "wednesday",
  },
  {
    text: "J",
    att: "thursday",
  },
  {
    text: "V",
    att: "friday",
  },
  {
    text: "S",
    att: "saturday",
  },
  {
    text: "D",
    att: "sunday",
  },
];
