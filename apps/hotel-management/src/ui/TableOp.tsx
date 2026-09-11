import styled from "styled-components";

const TableOp = styled.div`
    display: flex;
    gap: 1.2rem;

    margin-bottom: 1.6rem;

    @media (max-width: 768px) {
        width: 100%;
        min-width: 0;
        flex-direction: column;
        align-items: stretch;

        & > * {
            width: 100%;
            max-width: 100%;
            min-width: 0;
        }
    }
`;

export default TableOp;
