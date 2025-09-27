import RezervTabel from "../features/Rezervs/RezervTable";
import RezervTabelOp from "../features/Rezervs/RezervTableOp";
import Heading from "../ui/Heading";

export default function Rezerv() {
  return (
    <div>
      <Heading>رزرو</Heading>
      <RezervTabelOp />

      <RezervTabel />
    </div>
  );
}
