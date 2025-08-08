import UpdateSettings from "../features/settings/UpdateSetting";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Settings() {
  return (
    <Row>
      <Heading as="h1">ویرایش تنظیمات ویلا</Heading>
      <UpdateSettings />
    </Row>
  );
}
