import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--color-grey-700);
  gap: 1.6rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
`;

const Subtitle = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey-500);
`;

export default function Dashboard() {
  return (
    <Wrapper>
      <Title dir="ltr">I'm working on it 🙂</Title>
      <Subtitle>Dashboard is under construction</Subtitle>
    </Wrapper>
  );
}
