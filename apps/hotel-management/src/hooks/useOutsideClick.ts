import { useEffect, useRef } from "react";

export function useOutsideClick(handler: () => void) {
  const ref = useRef<HTMLUListElement>(null);
  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        // Check if the click is outside the ref element
        if (ref.current && !ref.current.contains(e.target as Node)) {
          handler();
        }
      }
      // we set true to capture the event in the capturing phase
      // so that we can handle the click before it reaches the target
      document.addEventListener("click", handleClick, true);
      // Cleanup the event Listener on component unmount
      return () => document.removeEventListener("click", handleClick, true);
    },
    [handler]
  );
  return ref;
}
