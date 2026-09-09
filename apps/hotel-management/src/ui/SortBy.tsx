import { useSearchParams } from "react-router-dom";
import { Select } from "./Select";

export default function SortBy({
  options,
}: {
  options: {
    label: string;
    value: string;
  }[];
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || options[0]?.value || "";

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);

    params.set("sortBy", e.target.value);

    if (params.get("page")) {
      params.set("page", "1");
    }

    setSearchParams(params);
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
