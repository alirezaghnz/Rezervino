import AddVilla from "../features/villas/AddVilla";
import VillaTable from "../features/villas/VillaTables";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Villa() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">لیست ویلا</Heading>
        <p>لیست/فیلتر</p>
      </Row>
      <Row type="vertical">
        <VillaTable />
        <AddVilla />
      </Row>
    </>
  );
}
