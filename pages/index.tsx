import { useState, useContext } from "react";

//Context
import { PageContext } from "~/contexts/pageContext";
import { FloorContext } from "~/contexts/floorContext";
import { RoomContext } from "~/contexts/roomContext";

// Components
import Home from "~/layouts/Home";
import SpacesFloor from "~/layouts/SpacesFloor";
import SpacesRoom from "~/layouts/SpacesRoom";
import Stats from "~/layouts/Stats";

type Page = "home" | "stats" | "spaces";
//Data
import { HOME, STATS, SPACES_FLOOR, SPACES_ROOM } from "~/data/page";

export default function App() {
  const { floor, setFloor } = useContext(FloorContext);
  const { room, setRoom } = useContext(RoomContext);
  const { page, setPage } = useContext(PageContext);
  switch (page) {
    case HOME:
      return <Home />;
    case SPACES_FLOOR:
      return <SpacesFloor floor={floor} />;
    case SPACES_ROOM:
      return <SpacesRoom id_room={room} floor={floor} />;
    case STATS:
      return <Stats />;
    default:
      return <div>404</div>;
  }
}
