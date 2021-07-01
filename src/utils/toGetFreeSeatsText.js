export default function toGetFreeSeatsText(clickedCalendarCard, freeSeats) {
  if (clickedCalendarCard.booked) {
    return '';
  }
  if (freeSeats > 0) {
    return `Осталось ${freeSeats} мест`;
  }
  return 'Запись закрыта';
}
