import styled from "styled-components";

const Image = styled.img`
  width: 200px;
  height: 80px;
  object-fit: cover;
`;

export default function Logo() {
  return (
    <div>
      <Image src="/logo.png" />
    </div>
  );
}
