import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.17); }
  100% { transform: scale(1); }
`;

const ring = keyframes`
  0% { stroke-opacity: 0.6; transform: scale(0.9); }
  70% { stroke-opacity: 0.12; transform: scale(1.4); }
  100% { stroke-opacity: 0; transform: scale(1.6); }
`;

const ClickIcon = styled.svg`
  width: 18px;
  height: 18px;
  color: "#007bff";
  .dot {
    animation: ${pulse} 1.4s infinite;
    transform-origin: 12px 12px;
    fill: currentColor;
  }
  .ring {
    animation: ${ring} 1.4s infinite;
    stroke: currentColor;
    fill: none;
    stroke-width: 1.2;
    opacity: 0.6;
  }
`;

const wiggle = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-15deg); }
  75% { transform: rotate(10deg); }
`;

const ClickEmoji = styled.span`
  display: block;
  animation: ${wiggle} 1s infinite;
  transform-origin: center;
`;

export default function ClickIndicator() {
  return (
    <ClickIcon viewBox="0 0 24 14" role="img" aria-label="Click">
      <g transform="translate(12,12)">
        <circle className="ring" cx="0" cy="0" r="100" />
        <circle className="dot" cx="0" cy="0" r="4.2" />
      </g>
    </ClickIcon>
  );
}
