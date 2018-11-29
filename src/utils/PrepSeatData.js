function addIdToSeat(seat) {
  const id = seat.seat + seat.row.toString();
  seat.id = id;
  return seat;
}

function formatRowsObject(rowsObject, currentSeat, allSeatsObject) {
  const rowNumber = currentSeat.row.toString();
  const formattedSeat = addIdToSeat(currentSeat);

  if (rowsObject.hasOwnProperty(rowNumber)) {
    const seatsArray = rowsObject[rowNumber];
    rowsObject[rowNumber] = seatsArray.concat([formattedSeat]);
  }
  else {
    rowsObject[rowNumber] = [formattedSeat];
  }

  allSeatsObject[formattedSeat.id] = formattedSeat;

  return rowsObject;
}

function formatSeatLettersSet(seatLettersSet, seat) {
  const seatLetter = seat.seat;
  seatLettersSet.add(seatLetter);
  return seatLettersSet;
}

function formatCabinObject(acc, currentSeat) {
  const currentSeatClass = currentSeat.class;
  const allSeatsObject = acc.allSeats;

  if (acc.hasOwnProperty(currentSeatClass)) {
    const cabinObject = acc[currentSeatClass];

    const rowsObject = cabinObject.rows;
    cabinObject.rows = formatRowsObject(rowsObject, currentSeat, allSeatsObject);

    const seatLettersSet = cabinObject.seatLetters;
    cabinObject.seatLetters = formatSeatLettersSet(seatLettersSet, currentSeat);

    acc[currentSeatClass] = cabinObject;
  }
  else {
    const cabinObject = {};
    cabinObject.rows = formatRowsObject({}, currentSeat, allSeatsObject);
    cabinObject.seatLetters = formatSeatLettersSet(new Set([]), currentSeat);
    acc[currentSeatClass] = cabinObject;
  }

  return acc;
}

export default function(rawSeatData) {
  return rawSeatData.reduce(formatCabinObject, { allSeats: {} });
}

