import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { useRezervs } from "./hooks/useRezervs";
import RezervRow from "./RezervRow";
import Pagination from "../../ui/Pagination";
import styled from "styled-components";
import RezervMobileCard from "./RezervMobileCard";

const DesktopView = styled.div`
  display: block;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileView = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: grid;
    gap: 1.4rem;
  }
`;

const MobilePagination = styled.div`
  margin-top: 1.6rem;
  display: flex;
  justify-content: center;
`;

export default function RezervTabel() {
  const { rezervs, isLoading, count } = useRezervs();

  if (isLoading) return <Spinner />;

  return (
    <>
      <DesktopView>
        <Table columns="1.1fr 1.8fr 2.2fr 1.2fr 1.2fr 3.6rem">
          <Table.Header>
            <div>ویلا</div>
            <div>مهمان</div>
            <div>زمان</div>
            <div>وضعیت</div>
            <div>قیمت</div>
            <div></div>
          </Table.Header>

          <Table.Body
            data={rezervs ?? []}
            render={(rezerv: any) => (
              <RezervRow key={rezerv.id} rezerving={rezerv} />
            )}
          />

          <Table.Footer>
            <Pagination count={count} />
          </Table.Footer>
        </Table>
      </DesktopView>

      <MobileView>
        {(rezervs ?? []).map((rezerv: any) => (
          <RezervMobileCard key={rezerv.id} rezerv={rezerv} />
        ))}

        <MobilePagination>
          <Pagination count={count} />
        </MobilePagination>
      </MobileView>
    </>
  );
}
