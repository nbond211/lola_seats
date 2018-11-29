function formatRowsObject(rowsObject, currentSeat) {
  const rowNumber = currentSeat.row.toString();

  if (rowsObject.hasOwnProperty(rowNumber)) {
    const seatsArray = rowsObject[rowNumber];
    rowsObject[rowNumber] = seatsArray.concat([currentSeat]);
  }
  else {
    rowsObject[rowNumber] = [currentSeat];
  }

  return rowsObject;
}

function formatSeatLettersSet(seatLettersSet, seat) {
  const seatLetter = seat.seat;
  seatLettersSet.add(seatLetter);
  return seatLettersSet;
}

function formatSeatClassObject(acc, currentSeat) {
  const currentSeatClass = currentSeat.class;

  if (acc.hasOwnProperty(currentSeatClass)) {
    const seatClassObject = acc[currentSeatClass];

    const rowsObject = seatClassObject.rows;
    seatClassObject.rows = formatRowsObject(rowsObject, currentSeat);

    const seatLettersSet = seatClassObject.seatLetters;
    seatClassObject.seatLetters = formatSeatLettersSet(seatLettersSet, currentSeat);

    acc[currentSeatClass] = seatClassObject;
  }
  else {
    const seatClassObject = {};
    seatClassObject.rows = formatRowsObject({}, currentSeat);
    seatClassObject.seatLetters = formatSeatLettersSet(new Set([]), currentSeat);
    acc[currentSeatClass] = seatClassObject;
  }

  return acc;
}

export default function(rawSeatData) {
  return rawSeatData.reduce(formatSeatClassObject, {});
}

