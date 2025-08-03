import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const StyleApp = styled.div`
  background-color: cyan;
  padding: 2rem 1.6rem;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyleApp>
        <Input></Input>
        <H1>فونت فارسی</H1>
        <Button onClick={() => alert("1")}>اضافه</Button>
        <Button onClick={() => alert("1")}>اضافه</Button>
      </StyleApp>
    </>
  );
}
