import searchItems from "../searchItems";

function getRandomIndexes(gameParams) {
  let size = Number(gameParams.selectedNum);
  let newDiff = [];
  let indexes = [];
  let randomArray = [];

  if (gameParams.selectedDiff == "easy") {
    newDiff = [...searchItems.easy];
  } else if (gameParams.selectedDiff == "medium") {
    newDiff = [...searchItems.easy, ...searchItems.medium];
  } else {
    newDiff = [...searchItems.easy, ...searchItems.medium, ...searchItems.hard];
  }

  while (indexes.length < size) {
    const randomIndex = Math.floor(Math.random() * newDiff.length);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
      randomArray.push(newDiff[randomIndex]);
    }
  }

  return randomArray;
}

export default getRandomIndexes;
