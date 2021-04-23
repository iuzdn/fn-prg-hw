const sampleArr = [1, 2, 3, 4, 5];

//====================================MAP=========================================//

function map(arr, fn) {
  return arr.reduce((acc, item) => [...acc, fn(item)], []);
}

const mapRes = map(sampleArr, (x) => x * 2);
console.log("Map: " + mapRes);

//====================================FILTER=========================================//

function filter(arr, cond) {
  return arr.reduce(
    (acc, item) => (cond(item) ? [...acc, item] : [...acc]),
    []
  );
}

const filterRes = filter(sampleArr, (x) => x > 2);
console.log("Filter: " + filterRes);

//====================================EVERY=========================================//

function every(arr, cond) {
  return arr.reduce((acc, item) => (acc ? cond(item) : acc), true);
}

const everyRes = every(sampleArr, (x) => x < 3);
console.log("Every: " + everyRes);

//====================================SOME=========================================//

function some(arr, cond) {
  return arr.reduce((acc, item) => (acc ? acc : cond(item)), false);
}

const someRes = some(sampleArr, (x) => x < 5);
console.log("Some: " + someRes);

//====================================FIND=========================================//

function find(arr, cond) {
  return arr.reduce((acc, item) => (cond(item) ? item : acc), undefined);
}

const findRes = find(sampleArr, (x) => x > 2);
console.log("find: " + findRes);

//====================================INDEX-OF=========================================//

function indexOf(arr, cond) {
  return arr.reduce((acc, item, idx) => (cond(item) ? idx : acc), -1);
}

const indexOfRes = indexOf(sampleArr, (x) => x == 3);
console.log("Index of 3 is: " + indexOfRes);
