import styled from "styled-components";

const TableOp = styled.div`
 display: flex;
align-items: center;
justify-content: space-between;
gap: 1.2rem;

margin-bottom: 1.6rem;

@media (max-width: 768px) {
flex-direction: column;
align-items: stretch;
gap: 1rem;
`;

export default TableOp;
