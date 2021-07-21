import { useRouter } from "next/router";
import BusyTimesGraph from "~/components/BusyTimesGraph";

export default function Floor() {
  const router = useRouter();
  const { uid } = router.query;

  return (
    <div>
      <div>Étage {uid}</div>;
      <BusyTimesGraph />
    </div>
  );
}