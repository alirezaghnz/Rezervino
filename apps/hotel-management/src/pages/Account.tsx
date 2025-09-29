import UpdateUser from "../features/authentication/UpdataUser";
import UpdatePassword from "../features/authentication/UpdatePassword";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Account() {
  return (
    <>
      <Heading as="h2">ویرایش اطلاعات </Heading>;
      <Row>
        <UpdateUser />
      </Row>
      ;
      <Row>
        <UpdatePassword />
      </Row>
    </>
  );
}
