function arrayToList(A) {
  let list = null;
  let Ct = 0;
  while (A.length > 0) {
    list = {value: A[A.length - 1],
            rest: list};
    A.pop(); 
  };
  
  return list;
};

function listToArray(list){
  let A = [];
  while (list !== null) {
    A.push(list.value);
    list = list.rest;
  };
  return A;
};

function prepend(V, list) {
  list = {value: V, rest: list}
  return list;
};

function nth(list, pos) {
  if (pos > 0) {
    pos--
    return nth(list.rest, pos)
  } else {
    return list.value 
  }
}

console.log(arrayToList([10, 20, 40, 50]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30, 40, "Hello world"])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30, 40, 50]), 1));
// → 20
