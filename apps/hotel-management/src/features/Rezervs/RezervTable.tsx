import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { useRezervs } from "./hooks/useRezervs";
import RezervRow from "./RezervRow";
import Pagination from "../../ui/Pagination";

export default function RezervTabel() {
  const { rezervs, isLoading, count } = useRezervs();

  {
    // we build filtering and sorting on the back-end Side on the supabase
    /* 
  const [searchParams] = useSearchParams();

  //filter Rezerv
  const filteredValue = searchParams.get("status") || "all";

  let filteredRezervs;
  if (filteredValue === "all") {
    filteredRezervs = rezervs;
  } else if (filteredValue === "وارد شده") {
    filteredRezervs = rezervs?.filter((r) => r.status === "وارد شده");
  } else if (filteredValue === "تایید نشده") {
    filteredRezervs = rezervs?.filter((r) => r.status === "تایید نشده");
  } else if (filteredValue === "خارج شده") {
    filteredRezervs = rezervs?.filter((r) => r.status === "خارج شده");
  }

  //sort Rezerv
  const sortBy = searchParams.get("sortBy") || "";
  */
  }

  if (isLoading) return <Spinner />;
  return (
    <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
      <Table.Header>
        <div>ویلا</div>
        <div>مهمان</div>
        <div>زمان</div>
        <div>وضعیت</div>
        <div>مانده</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={rezervs}
        render={(rezerv) => <RezervRow key={rezerv.id} booking={rezerv} />}
      />
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}
