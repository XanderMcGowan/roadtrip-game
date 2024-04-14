import searchItems from "../searchItems";

function getRandomIndexes(gameParams) {
    let size = Number(gameParams.selectedNum);
    let newDiff = []
    let indexes = [];
    let randomArray = [];

    if (gameParams.selectedDiff == "easy") {
      newDiff = [...searchItems.easy];
      console.log(newDiff);
    } else if (gameParams.selectedDiff == "medium") {
      newDiff = [...searchItems.easy, ...searchItems.medium];
      console.log(newDiff);
    } else {
      newDiff = [
        ...searchItems.easy,
        ...searchItems.medium,
        ...searchItems.hard,
      ];
      console.log(newDiff);
    }



    // Generate random indexes and add them to the array
    while (indexes.length < size) {

      const randomIndex = Math.floor(Math.random() *newDiff.length);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
        randomArray.push(newDiff[randomIndex])
      }

      console.log(indexes)
    }

    // for (let i = 0; i < indexes.length; i++) {
    //   randomArray.push(newDiff[indexes[i]])
    // }
    console.log("this is the" + [randomArray])
    
    return randomArray;
  }

  export default getRandomIndexes