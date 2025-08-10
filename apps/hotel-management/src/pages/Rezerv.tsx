import RezervTabel from "../features/Rezervs/RezervTable";
import RezervTabelOp from "../features/Rezervs/RezervTableOp";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Rezerv() {
  return (
    <div>
      <Row type="horizontal">
        <Heading>رزرو</Heading>
        <RezervTabelOp />
      </Row>
      <RezervTabel />
    </div>
  );
}
