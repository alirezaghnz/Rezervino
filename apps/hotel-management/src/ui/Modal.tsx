import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

interface WindowProps {
  children: React.ReactElement<{
    onCloseModal?: () => void;
  }>;
  name: string;
  size?: "small" | "medium" | "large";
}

const StyledModal = styled.div<{
  $size: "small" | "medium" | "large";
}>`
  position: fixed;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: ${(props) => {
    switch (props.$size) {
      case "small":
        return "44rem";

      case "medium":
        return "60rem";

      case "large":
      default:
        return "80rem";
    }
  }};

  max-width: calc(100vw - 3.2rem);
  max-height: calc(100vh - 3.2rem);

  overflow-y: auto;

  background-color: var(--color-grey-0);

  border: 1px solid var(--color-grey-200);

  border-radius: 18px;

  box-shadow: var(--shadow-lg);

  padding: ${(props) => (props.$size === "small" ? "2.4rem" : "2.8rem")};

  z-index: 1001;

  animation: modalIn 0.2s ease-out;

  @keyframes modalIn {
    from {
      opacity: 0;
      transform: translate(-50%, -48%);
    }

    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @media (max-width: 768px) {
    width: calc(100vw - 2rem);
    max-width: calc(100vw - 2rem);

    max-height: calc(100vh - 2rem);

    border-radius: 16px;

    padding: ${(props) => (props.$size === "small" ? "1.8rem" : "1.6rem")};
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.45);

  backdrop-filter: blur(6px);

  z-index: 9999;
`;
const Button = styled.button`
  position: sticky;

  top: 1rem;

  margin-right: auto;

  width: 4rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  border-radius: 999px;

  background: var(--color-grey-100);

  transition: 0.2s;

  &:hover {
    background: var(--color-red-100);
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

type ModalContextType = {
  openName: string;
  close: () => void;
  open: (name: string) => void;
};
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Modal component
interface ModalProps {
  children: React.ReactNode;
}
export function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState<string>("");
  const close = () => setOpenName("");
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}
//
interface OpenProps {
  children: React.ReactElement<{ onClick?: () => void }>;
  opens: string;
}
function Open({ children, opens: openWindowName }: OpenProps) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Open must be used within a Modal");
  const { open } = context;
  return cloneElement(children, { onClick: () => open(openWindowName) });
}

interface WindowProps {
  children: React.ReactElement<{ onCloseModal?: () => void }>;
  name: string;
}
export function Window({ children, name, size = "large" }: WindowProps) {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Window must be used within a Modal");
  }

  const { openName, close } = context;

  const ref = useOutsideClick<HTMLDivElement>(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref} $size={size}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>
          {cloneElement(children, {
            onCloseModal: close,
          })}
        </div>
      </StyledModal>
    </Overlay>,
    document.body,
  );
}
// We need to export Open and Window so that we can use them in other components
Modal.Open = Open;
Modal.Window = Window;
