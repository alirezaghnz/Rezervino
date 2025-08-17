import styled from "styled-components";

const StyledSelect = styled.select<{ $type?: "white" | "default" }>`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.$type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
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
  options: { label: string; value: string }[];
  $type?: "white" | "default";
}) {
  return (
    <StyledSelect onChange={onChange} value={value} $type={$type} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}
