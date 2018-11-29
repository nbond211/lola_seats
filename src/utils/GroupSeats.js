function findSeat(seatLetter, seats) {
  return seats.find(seat => seat.seat === seatLetter);
}

export default function(seats, seatGrouping) {
  return seatGrouping.map(seatGroup => {
    return seatGroup.map(seatLetter => findSeat(seatLetter, seats));
  });
}
