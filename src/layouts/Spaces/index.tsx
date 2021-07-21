import { useRouter } from "next/router";
import { useContext } from "react";

import { PageContext } from "~/contexts/pageContext";
import { FloorContext } from "~/contexts/floorContext";
import { RoomContext } from "~/contexts/roomContext";

import BusyTimesGraph from "~/components/BusyTimesGraph";
import SpacesFloor from "~/layouts/SpacesFloor";
import SpacesRoom from "~/layouts/SpacesRoom";

export default function Spaces() {
  const router = useRouter();
  const { uid } = router.query;

  const { floor, setFloor } = useContext(FloorContext);
  const { room, setRoom } = useContext(RoomContext);
  const { page, setPage } = useContext(PageContext);

  return (
    <>
      {room !== null ? (
        <SpacesRoom id_room={room} floor={floor} />
      ) : (
        <SpacesFloor floor={floor} />
      )}
    </>
  );
}
