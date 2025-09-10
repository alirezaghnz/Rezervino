"use client";

import { useState } from "react";

const MAX_TEXT = 40;

export default function ShowMore({ children }: { children: string }) {
  const [isShowMore, setIsShowMore] = useState(false);

  const display = isShowMore
    ? children
    : children.split(" ").slice(0, 40).join(" ") + "...";

  if (children.length < MAX_TEXT) return children;

  return (
    <span>
      {display}
      <button
        className="text-primary-700 border-b border-primary-400"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "بستن" : "ادامه"}
      </button>
    </span>
  );
}
