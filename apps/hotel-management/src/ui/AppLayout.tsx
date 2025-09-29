import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState } from "react";

const StyledLayout = styled.div<{ $collapsed?: boolean }>`
  display: grid;
  transition: grid-template-columns 0.5s ease;
  grid-template-columns: ${(props) =>
    props.$collapsed ? "10rem 1fr" : "26rem 1fr"};

  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    min-height: 100vh;
    height: auto;
    overflow-x: hidden;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-100);
  padding: 4rem 4.8rem 6.4rem;
  @media (max-width: 768px) {
    padding: 2rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 120rem;

  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 100%;
    //padding bottom for responsive mobile
    padding: 0 0 6rem;
  }
`;
export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <StyledLayout $collapsed={collapsed}>
      <Header />
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledLayout>
  );
}
