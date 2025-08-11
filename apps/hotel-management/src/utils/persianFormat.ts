import { format } from "date-fns-jalali";

export function toPersianDigits(str) {
  return str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
export function formatJalali(date, fmt = "yyyy/MM/dd") {
  return toPersianDigits(format(new Date(date), fmt));
}

export function formatToman(value: number) {
  if (value == null) return "";
  return `${new Intl.NumberFormat("fa-IR").format(value)} هزار تومان`;
}
