import UpdateUser from "../features/authentication/UpdataUser";
import UpdatePassword from "../features/authentication/UpdatePassword";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Account() {
  return (
    <>
      <Heading>ویرایش اطلاعات کاربری</Heading>;
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
