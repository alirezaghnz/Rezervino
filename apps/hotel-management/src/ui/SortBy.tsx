import { useSearchParams } from "react-router-dom";
import { Select } from "./Select";

export default function SortBy({ options }: any) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  const handleSort = (e: any) => {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Select
      value={sortBy}
      options={options}
      $type="white"
      onChange={handleSort}
    />
  );
}
