import { useEffect } from "react";
import { getVillas } from "../services/apiVillas";

export default function Villa() {
  useEffect(function () {
    getVillas().then((data) => console.log(data));
  }, []);
  return <div>Villa List</div>;
}
