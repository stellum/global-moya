import { format, parseISO, subMonths } from "date-fns";
export const dateFormat = (date) => {
  return format(parseISO(date), "yyyy.MM.dd");
};

export const subDate = (date) => {
  return format(subMonths(parseISO(date), 1), "yyyy.MM.dd");
};
