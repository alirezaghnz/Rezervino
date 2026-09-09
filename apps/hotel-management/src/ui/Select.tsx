import styled from "styled-components";

const StyledSelect = styled.select<{
  $type?: "white" | "default";
}>`
  width: fit-content;
  min-width: 18rem;
  max-width: 100%;

  padding: 0.85rem 3.5rem 0.85rem 1.2rem;

  border: 1px solid
    ${(props) =>
      props.$type === "white"
        ? "var(--color-grey-200)"
        : "var(--color-grey-300)"};

  border-radius: 12px;

  background-color: var(--color-grey-0);

  color: var(--color-grey-700);

  font-size: 1.35rem;
  font-weight: 600;

  box-shadow: var(--shadow-sm);

  cursor: pointer;

  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:hover {
    border-color: var(--color-grey-300);
  }

  &:focus {
    outline: none;
    border-color: var(--color-brand-500);
    box-shadow: 0 0 0 3px var(--color-brand-100);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;

    padding: 0.9rem 1rem;

    font-size: 1.3rem;
  }
`;

export function Select({
  onChange,
  options,
  value,
  $type,
  ...props
}: {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  options: {
    label: string;
    value: string;
  }[];
  $type?: "white" | "default";
}) {
  return (
    <StyledSelect onChange={onChange} value={value} $type={$type} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}{" "}
        </option>
      ))}{" "}
    </StyledSelect>
  );
}
