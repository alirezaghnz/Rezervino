import UpdateSettings from "../features/settings/UpdateSetting";
import Heading from "../ui/Heading";

export default function Settings() {
  return (
    <>
      <Heading as="h1">ویرایش تنظیمات ویلا</Heading>
      <UpdateSettings />
    </>
  );
}
