Arr = [1, 2, 3, 4, 5, 6];

function addFive(arr) {
  return [...arr, 5];
}

function multiplyByThree(arr) {
  return arr.map((item) => item * 3);
}

function filterOdds(arr) {
  return arr.filter((x) => x % 2 == 0);
}

const _pipe = (a, b) => (arg) => a(b(arg));
const compose = (...ops) => ops.reduce(_pipe);

const costPerPersonUsd = compose(filterOdds, multiplyByThree, addFive)(Arr);
console.log(costPerPersonUsd);
