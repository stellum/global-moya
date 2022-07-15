import { format, parseISO, subMonths, sub } from "date-fns";
export const dateFormat = (date) => {
  console.log(date);
  return format(parseISO(date), "yyyy.MM.dd");
};

export const subDate = (date) => {
  // console.log(agoDate);
  return format(subMonths(parseISO(date), 1), "yyyy.MM.dd");
  // return subMonths(parseISO(agoDate), 1);
  // return subMonths(parseISO(agoDate), 1);
};
