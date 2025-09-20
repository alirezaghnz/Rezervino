"use client";

import { useEffect, useState } from "react";
// @ts-ignore
import { allProvinces } from "iran-city";

export default function SelectCity({ id, name, defaultCity, className }: any) {
  const [ostans, setOstans] = useState<{ id: number; name: string }[]>([]);

  //load ostans on mount
  useEffect(() => {
    setOstans(allProvinces() ?? []);
  }, [setOstans]);

  return (
    <select
      name={name}
      id={id}
      defaultValue={defaultCity}
      className={className}
    >
      <option value="">استان محل سکونت</option>
      {ostans?.map((p) => (
        <option value={p.name} key={p.name}>
          {p.name}
        </option>
      ))}
    </select>
  );
}
