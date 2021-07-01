import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const year = (card) => format(new Date(card.date), 'y', { locale: ru });
const monthText = (card) => format(new Date(card.startAt || card.date), 'LLLL', { locale: ru });
const monthTextPadeg = (card) =>
  format(new Date(card.startAt || card.date), 'MMMM', { locale: ru });
const monthNumber = (card) => format(new Date(card.date), 'MM', { locale: ru });
const dayName = (card) => format(new Date(card.startAt), 'EEEE', { locale: ru });
const dayNumber = (card) => format(new Date(card.startAt || card.date), 'd', { locale: ru });
const hourStart = (card) => format(new Date(card.startAt), 'k', { locale: ru });
const minuteStart = (card) => format(new Date(card.startAt), 'mm', { locale: ru });
const hourEnd = (card) => format(new Date(card.endAt), 'k', { locale: ru });
const minuteEnd = (card) => format(new Date(card.endAt), 'mm', { locale: ru });

export {
  year,
  monthText,
  monthTextPadeg,
  monthNumber,
  dayName,
  dayNumber,
  hourStart,
  minuteStart,
  hourEnd,
  minuteEnd,
};
