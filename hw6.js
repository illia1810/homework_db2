// Task 1
// make unique array of objects [{ a:1, b:2 }, { a:2, c:3 }, { a:1, b:2 }] -> [{ a:1, b:2 }, { a:2, c:3 }]
const arr1 =  [{ a:1, b:2 }, { a:2, c:3 }, { a:1, b:2 }];
arr1.pop();
const arr1_changed = arr1;
console.log(arr1_changed);

//Task 2
// get through array without any for/while, map, forEach, reduce, etc. functions.
// You can only use getting element of an array by it's index and getting array's length, self-made functions.
const arr2 = [1, 'two', 3, 'four', 5];
i = 0;
const getElements = (arr) => {
        console.log (arr[i]);
        i++;
        i < arr.length ? getElements(arr) : i = 0;
}
getElements(arr2);

//Task 3
// Find letters in ukranian words that are written the same as English ones. 'Дерево' -> ['e', 'p', 'o']
function findCommonLetters(word) {
    const letters = 'АаВbCcDdEeFfGgHhJjIiLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
    const sameLetters = [];
  
    for(i = 0; i < word.length; i++) {
      if (letters.includes(word[i]) && !sameLetters.includes(word[i])) {
        sameLetters.push(word[i]);
      }
    }
    console.log(sameLetters);
  }
  
  findCommonLetters('дерево');