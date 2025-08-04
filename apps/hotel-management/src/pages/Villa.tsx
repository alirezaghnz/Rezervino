import { useState } from "react";
import VillaTable from "../features/villas/VillaTables";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { CreateVilla } from "../features/villas/CreateVilla";

export default function Villa() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">لیست ویلا</Heading>
        <p>لیست/فیلتر</p>
      </Row>
      <Row type="vertical">
        <VillaTable />
        <Button onClick={() => setShowForm((show) => !show)}>
          اضافه کردن ویلا
        </Button>
        {showForm && <CreateVilla />}
      </Row>
    </>
  );
}
