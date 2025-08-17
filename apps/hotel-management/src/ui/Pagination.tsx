import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PAGE_SIZE } from "../utils/constantist";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

type Pagination = {
  active?: boolean;
};
const PaginationButton = styled.button<Pagination>`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 2rem;
  }

  &:has(span:first-child) {
    padding-right: 2rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

export default function Pagination({ count }: { count: any }) {
  const [searchParams, setSearchParams] = useSearchParams();

  //Get current page from searchParams or default  1
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  // Calculate total pages based on count and PAGE_SIZE
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function handleNext() {
    //If currentPage is the last page, do not noting
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", String(next));
    setSearchParams(searchParams);
  }
  function handlePrev() {
    //If currentPage is the first page, do not noting
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", String(prev));
    setSearchParams(searchParams);
  }

  //If there is only one page, we dont need to show pagination
  if (pageCount <= 1) return null;
  return (
    <StyledPagination>
      <p>
        <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> تا
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        از <span>{count}</span> مورد
      </p>

      <Buttons>
        <PaginationButton
          onClick={handleNext}
          disabled={currentPage == pageCount}
        >
          <span>بعد</span>
        </PaginationButton>

        <PaginationButton onClick={handlePrev} disabled={currentPage === 1}>
          <span>قبل</span>
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}
