import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-lg);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

//reusable Filter component
export default function Filter({
  filterFiled,
  options,
}: {
  filterFiled: string;
  options: { label: string; value: string }[];
}) {
  // Using useSearchParams to set query parameters for filtering and globally manage the filter state
  const [searchParams, setSearchParams] = useSearchParams();
  //Get the current filter(or First option by default) value from URl for active
  const currentFilter = searchParams.get(filterFiled) || options[0].value;

  const handleFilter = (value: string) => {
    searchParams.set(filterFiled, value);
    //fix bug in filter when we go another filter
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  };
  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleFilter(option.value)}
          active={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}
