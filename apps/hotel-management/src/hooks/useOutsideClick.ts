import { useEffect, useRef, type RefObject } from "react";

export function useOutsideClick<T extends HTMLElement>(
  handler: () => void
): RefObject<T | null> {
  const ref = useRef<T | null>(null);
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
