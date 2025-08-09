import AddVilla from "../features/villas/AddVilla";
import VillaTableOp from "../features/villas/VillaTableOp";
import VillaTable from "../features/villas/VillaTables";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Villa() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">لیست ویلا</Heading>
        <VillaTableOp />
      </Row>
      <Row type="vertical">
        <VillaTable />
        <AddVilla />
      </Row>
    </>
  );
}
