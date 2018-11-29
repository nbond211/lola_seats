const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function(seatLetters) {
  let result = [];
  const seatLettersArray = Array.from(seatLetters);
  seatLettersArray.sort();

  let lastIndex = 0;
  let alphabetIndex = 0;
  for (let i = 0; i <= seatLettersArray.length; i++) {
    const currentSeatLetter = seatLettersArray[i] || "none";
    const currentAlphabetLetter = alphabet[alphabetIndex];

    if (currentSeatLetter !== currentAlphabetLetter) {
      result.push(seatLettersArray.slice(lastIndex, i));
      lastIndex = i;
      alphabetIndex++;
    }
    alphabetIndex++;
  }
  return result;
}
