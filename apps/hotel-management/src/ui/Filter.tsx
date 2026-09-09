import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  width: fit-content;
  max-width: 100%;

  padding: 0.4rem;

  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 12px;

  box-shadow: var(--shadow-sm);

  overflow-x: auto;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

type FilterButtonProps = {
  active?: boolean;
};

const FilterButton = styled.button<FilterButtonProps>`
  flex-shrink: 0;

  border: none;
  border-radius: 9px;

  padding: 0.8rem 1.4rem;

  background-color: transparent;

  color: var(--color-grey-600);

  font-size: 1.35rem;
  font-weight: 600;

  white-space: nowrap;

  cursor: pointer;

  transition:
    background-color 0.2s,
    color 0.2s,
    box-shadow 0.2s;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: white;
      box-shadow: var(--shadow-sm);
    `}

  &:hover:not(:disabled) {
    background-color: var(--color-brand-50);
    color: var(--color-brand-700);
  }

  ${(props) =>
    props.active &&
    css`
      &:hover {
        background-color: var(--color-brand-600);
        color: white;
      }
    `}

  &:focus-visible {
    outline: 2px solid var(--color-brand-500);
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 0.85rem 1.2rem;
    font-size: 1.3rem;
  }
`;

export default function Filter({
  filterFiled,
  options,
}: {
  filterFiled: string;
  options: {
    label: string;
    value: string;
  }[];
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterFiled) || options[0]?.value;

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set(filterFiled, value);

    if (params.get("page")) {
      params.set("page", "1");
    }

    setSearchParams(params);
  };

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          type="button"
          active={option.value === currentFilter}
          onClick={() => handleFilter(option.value)}
        >
          {option.label}{" "}
        </FilterButton>
      ))}{" "}
    </StyledFilter>
  );
}
