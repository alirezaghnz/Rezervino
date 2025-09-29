import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useMoveBack } from "../hooks/useBack";

const animat = keyframes`
0% { transform: translateY(0px); }
50% { transform: translateY(-10px); }
100% { transform: translateY(0px); }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.2rem;
  background: linear-gradient(
    180deg,
    var(--color-grey-100),
    var(--color-grey-200)
  );
`;
const Card = styled.section`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  background: var(--color-grey-0);
  padding: 2.4rem 3.2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(16, 24, 40, 0.08);
  width: 100%;
  max-width: 980px;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }
`;

const Anim = styled.div`
  flex: 0 0 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${animat} 4s ease-in-out infinite;

  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    flex: 0 0 200px;
  }
`;

const Content = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  //border: 1px solid red;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.1rem;
  color: var(--color-grey-900);
`;

const Subtitle = styled.p`
  margin: 0;
  color: var(--color-grey-700);
  line-height: 1.5;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.8rem;

  @media (max-width: 480px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 1.2rem;
  background: linear-gradient(90deg, var(--color-yellow-500), #f7b500);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 6px 18px rgba(247, 183, 0, 0.18);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(247, 183, 0, 0.18);
  }
`;

const GhostButton = styled.button`
  background: transparent;
  border: 1px solid var(--color-grey-200);
  color: var(--color-grey-800);
  padding: 0.8rem 1rem;
  border-radius: 8px;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(16, 24, 40, 0.06);
  }
`;

export default function PageNotFound({ homePath = "/" }) {
  const navigate = useNavigate();
  const back = useMoveBack();
  return (
    <Container>
      <Card>
        <Anim aria-hidden>
          <svg
            width="220"
            height="160"
            viewBox="0 0 220 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0"
              y="0"
              width="220"
              height="160"
              rx="12"
              fill="var(--color-grey-0)"
            />
            <g transform="translate(22,18)">
              <circle cx="42" cy="42" r="34" fill="var(--color-yellow-500)" />
              <path
                d="M20 110 C50 80, 120 80, 150 110"
                stroke="var(--color-grey-200)"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              <rect
                x="96"
                y="6"
                width="56"
                height="56"
                rx="8"
                fill="var(--color-grey-100)"
              />
              <text
                x="42"
                y="52"
                textAnchor="middle"
                fontSize="34"
                fontFamily="sans-serif"
                fill="var(--color-grey-900)"
              >
                404
              </text>
            </g>
          </svg>
        </Anim>
        <Content>
          <Title>صفحه یافت نشد.</Title>
          <Subtitle>
            آدرس وارد شده وجود نداره یا شاید منتقل شده. اما نگران نباش، می‌تونیم
            برگردیم.
          </Subtitle>
          <Actions>
            <PrimaryButton
              onClick={() => navigate(homePath)}
              aria-label="Go home"
            >
              <FaHome style={{ marginRight: "0.6rem" }} /> بازگشت به خانه
            </PrimaryButton>

            <GhostButton onClick={back} aria-label="Go back">
              بازگشت به صفحه قبل
            </GhostButton>
          </Actions>
        </Content>
      </Card>
    </Container>
  );
}
