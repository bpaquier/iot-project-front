interface BarData {
  name: BarDataName;
  uv: number;
}

type BarDataName =
  | "9h"
  | "10h30"
  | "12h"
  | "13h30"
  | "15h"
  | "16h30"
  | "18h"
  | "19h30"
  | "21h";

export const dataGraph: Array<Array<BarData>> = [
  [
    { name: "9h", uv: 44 },
    { name: "10h30", uv: 82 },
    { name: "12h", uv: 54 },
    { name: "13h30", uv: 76 },
    { name: "15h", uv: 87 },
    { name: "16h30", uv: 100 },
    { name: "18h", uv: 85 },
    { name: "19h30", uv: 30 },
    { name: "21h", uv: 28 },
  ],
  [
    { name: "9h", uv: 60 },
    { name: "10h30", uv: 100 },
    { name: "12h", uv: 24 },
    { name: "13h30", uv: 98 },
    { name: "15h", uv: 84 },
    { name: "16h30", uv: 69 },
    { name: "18h", uv: 83 },
    { name: "19h30", uv: 59 },
    { name: "21h", uv: 5 },
  ],
  [
    { name: "9h", uv: 55 },
    { name: "10h30", uv: 44 },
    { name: "12h", uv: 65 },
    { name: "13h30", uv: 52 },
    { name: "15h", uv: 70 },
    { name: "16h30", uv: 66 },
    { name: "18h", uv: 83 },
    { name: "19h30", uv: 30 },
    { name: "21h", uv: 6 },
  ],
  [
    { name: "9h", uv: 48 },
    { name: "10h30", uv: 70 },
    { name: "12h", uv: 95 },
    { name: "13h30", uv: 29 },
    { name: "15h", uv: 69 },
    { name: "16h30", uv: 68 },
    { name: "18h", uv: 88 },
    { name: "19h30", uv: 69 },
    { name: "21h", uv: 4 },
  ],
  [
    { name: "9h", uv: 54 },
    { name: "10h30", uv: 71 },
    { name: "12h", uv: 77 },
    { name: "13h30", uv: 68 },
    { name: "15h", uv: 80 },
    { name: "16h30", uv: 66 },
    { name: "18h", uv: 100 },
    { name: "19h30", uv: 41 },
    { name: "21h", uv: 21 },
  ],
  [
    { name: "9h", uv: 46 },
    { name: "10h30", uv: 44 },
    { name: "12h", uv: 24 },
    { name: "13h30", uv: 88 },
    { name: "15h", uv: 62 },
    { name: "16h30", uv: 61 },
    { name: "18h", uv: 93 },
    { name: "19h30", uv: 35 },
    { name: "21h", uv: 40 },
  ],
  [
    { name: "9h", uv: 53 },
    { name: "10h30", uv: 52 },
    { name: "12h", uv: 100 },
    { name: "13h30", uv: 24 },
    { name: "15h", uv: 63 },
    { name: "16h30", uv: 97 },
    { name: "18h", uv: 97 },
    { name: "19h30", uv: 49 },
    { name: "21h", uv: 55 },
  ],
];
