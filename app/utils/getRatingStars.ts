function getRatingStars(rating: number) {
  const roundedRating = Math.round(rating * 2) / 2;
  const starsArray = [];

  // Add full stars
  for (let i = 0; i < Math.floor(roundedRating); i++) {
    starsArray.push("full");
  }

  // Add half star if needed
  if (roundedRating % 1 !== 0) {
    starsArray.push("half");
  }

  // Add empty stars
  while (starsArray.length < 5) {
    starsArray.push("empty");
  }

  return starsArray;
}

export default getRatingStars;
