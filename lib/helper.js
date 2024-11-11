import {
  add,
  addMinutes,
  getHours,
  getMinutes,
  isBefore,
  isEqual,
  parse,
} from "date-fns";

export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const roundToNearestMinutes = (date, interval) => {
  const minutesLeftUntilNextInterval = interval - (getMinutes(date) % interval);
  return addMinutes(date, minutesLeftUntilNextInterval);
  // Alternatively to ignore seconds (even more precise)
  // return new Date(addMinutes(date, minutesLeftUntilNextInterval).setSeconds(0))
};

export function formatCurrency(value) {
  return new Intl.NumberFormat("tr", {
    style: "currency",
    currency: "TRY",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("tr", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}
