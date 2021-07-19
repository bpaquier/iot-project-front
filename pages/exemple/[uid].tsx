import { useRouter } from "next/router";

export default function Etage() {
  const router = useRouter();
  const { uid } = router.query;
  return <div>{uid}</div>;
}
