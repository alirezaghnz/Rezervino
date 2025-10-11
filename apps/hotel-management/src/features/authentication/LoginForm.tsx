import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Form from "../../ui/Form";
import { useLogin } from "./hooks/useLogin";
import toast from "react-hot-toast";
import ClickIndicator from "../../ui/Click";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-30px);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: #131d25;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background: #357ab8;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1.1rem;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 1.2rem;

  &:focus {
    border-color: #4a90e2;
    outline: none;
  }
`;

//for Karfarma

const Karfarma = styled.p`
  border: 1px solid #ccc;
  background-color: #dfd1d1;
  border-radius: 5px;
  margin-top: 1rem;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  font-size: 14px;
  color: #0077ff;
  cursor: pointer;
`;

const ModalOverlay = styled.div<{ $closing?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem; /* برای موبایل */
`;

const Modal = styled.div<{ $closing?: boolean }>`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 400px;
  max-width: 100%; /* روی موبایل فیت بشه */
  text-align: center;
  animation: ${({ $closing }) => ($closing ? slideDown : slideUp)} 0.3s forwards;

  h3 {
    margin-bottom: 1rem;
  }

  .cred {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
    padding: 0.5rem 0.8rem;
    background: #f9f9f9;
    border-radius: 6px;
    font-size: 14px;
    word-break: break-all; /* برای ایمیل طولانی */
  }

  button {
    margin-top: 1rem;
    width: 100%;
    padding: 10px;
    border: none;
    background: #0077ff;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    h3 {
      font-size: 16px;
    }
    .cred {
      font-size: 13px;
    }
  }
`;

export default function LoginForm() {
  const { login, isLoadingLogin } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isAutoShowModal, setIsAutoShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    //if already shown in this browser, do not show again.
    const alreadyShow = localStorage.getItem("isAutoShowModal");
    if (alreadyShow) return;

    const timer = setTimeout(() => {
      setIsAutoShowModal(true);
      localStorage.setItem("isAutoShowModal", "true");
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    // use the Clipboard API to copy text for pass and email Karfarma
    navigator.clipboard.writeText(text);
    toast.success(`${label} کپی شد.`, {
      position: "top-center",
    });
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      // for clear email and password if something went wrong
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  function handleClose() {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setIsAutoShowModal(false);
      setIsClosing(false);
    }, 300);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label>ایمیل آدرس</label>
        <Input
          type="email"
          id="email"
          placeholder="ایمیل خود را وارد نمایید"
          // for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoadingLogin}
        />

        <label>رمز عبور</label>
        <Input
          type="password"
          id="password"
          placeholder="رمز عبور خود را وارد نمایید."
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoadingLogin}
        />
        <Button>ورود</Button>

        <Karfarma onClick={() => setShowModal(true)}>
          <span>برای ورود به پنل ادمین کلیک کنید </span>
          <span>
            <ClickIndicator />
          </span>
        </Karfarma>
      </Form>

      {(showModal || isAutoShowModal) && (
        <ModalOverlay $closing={isClosing} onClick={handleClose}>
          <Modal $closing={isClosing} onClick={(e) => e.stopPropagation()}>
            <h3>اطلاعات ورود به پنل ادمین</h3>

            <div className="cred">
              <button
                onClick={() => copyToClipboard("karfarma@test.com", "ایمیل")}
              >
                📋 کپی ایمیل
              </button>
            </div>
            <div className="cred">
              <button onClick={() => copyToClipboard("Test1234", "پسورد")}>
                📋 کپی پسورد
              </button>
            </div>

            <button
              onClick={() => {
                setIsAutoShowModal(false);
                setShowModal(false);
              }}
            >
              بستن
            </button>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
}
