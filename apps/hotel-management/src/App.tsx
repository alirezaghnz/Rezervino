import styled from "styled-components";

const StyleApp = styled.div`
  background-color: cyan;
  padding: 2rem 1.6rem;
`;
const Button = styled.button`
  border: none;
  border-radius: 1.2rem;
  background-color: #da6d6d;
  color: white;
  padding: 1.2rem 3rem;
`;
const H1 = styled.h1`
  font-weight: bold;
  font-size: 20px;
`;
const Input = styled.input`
  border: none;
  padding: 1rem 5rem;
  border-radius: 0.5rem;
`;

export default function App() {
  return (
    <StyleApp>
      <Input></Input>
      <H1>Hello world</H1>
      <Button onClick={() => alert("1")}>Add</Button>
      <Button onClick={() => alert("1")}>Add</Button>
    </StyleApp>
  );
}
