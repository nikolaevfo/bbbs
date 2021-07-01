import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export default function toGetMonthListShorter(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const data = format(new Date(arr[i].startAt), 'LLLL', { locale: ru });
    if (!result.includes(data)) {
      result.push(data);
    }
  }
  return result;
}
