import styled from "styled-components";
import UpdateUser from "../features/authentication/UpdataUser";
import UpdatePassword from "../features/authentication/UpdatePassword";
import Heading from "../ui/Heading";

const Page = styled.div`
  max-width: 110rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);

  border-radius: 20px;

  padding: 2.4rem;

  box-shadow: var(--shadow-md);
`;

export default function Account() {
  return (
    <Page>
      <Heading as="h2">تنظیمات حساب کاربری</Heading>

      <Grid>
        <Card>
          <UpdateUser />
        </Card>

        <Card>
          <UpdatePassword />
        </Card>
      </Grid>
    </Page>
  );
}
