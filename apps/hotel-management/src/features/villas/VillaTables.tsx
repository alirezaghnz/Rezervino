import { useVillas } from "./hooks/useVillas";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import VillaRows from "./VillaRows";
import { useSearchParams } from "react-router-dom";

export default function VillaTable() {
  const { isLoading, villa } = useVillas();
  const [searchParams] = useSearchParams();
  // Using useSearchParams to get the current filter state from the URL
  const filteredValue = searchParams.get("discount") || "all";
  let filteredVillas;

  //Filtering villas based on the discount value
  // If there is no filter, all villas are shown
  if (filteredValue === "all") {
    filteredVillas = villa;
  }
  if (filteredValue === "discount") {
    filteredVillas = villa?.filter((v) => v.discount > 0);
  }
  if (filteredValue === "no-discount") {
    filteredVillas = villa?.filter((v) => v.discount === 0);
  }

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-") as [
    keyof (typeof villa)[0],
    string
  ];
  //Defining the Villa type to ensure type safety but need to add Type Folder
  type Villa = {
    id: number;
    name: string;
    maxCapacity: number;
    regularPrice: number;
    discount: number;
    description: string;
    image: string;
  };

  const modifier = direction === "asc" ? 1 : -1;
  // Sorting villas based on the field and direction
  const sortedVillas = filteredVillas?.slice().sort((a, b) => {
    const aValue = a[field as keyof Villa];
    const bValue = b[field as keyof Villa];
    // Comparing values based on their type and use localCompare for languge Persian
    if (typeof aValue === "string" && typeof bValue === "string") {
      return aValue.localeCompare(bValue, "fa") * modifier;
    }
    if (typeof aValue === "number" && typeof bValue === "number") {
      return (aValue - bValue) * modifier;
    }
    return 0;
  });
  if (isLoading) return <Spinner />;

  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header role="row">
        <div></div>
        <div>ویلا</div>
        <div>ظرفیت</div>
        <div>قیمت</div>
        <div>تخفیف</div>
      </Table.Header>
      {/*  we use render prop to render each villa Body instead of compound components */}
      <Table.Body
        data={sortedVillas ?? []}
        render={(v) => <VillaRows key={v.id} v={v} />}
      />
    </Table>
  );
}
