const test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function f(arr) {
  const percsq = _.filter(arr, function (a) {
    return Math.sqrt(a) % 1 === 0;
  });
  const sqrs = _.map(arr, function (a) {
    return a * a;
  });
  const c = [];
  c.push(percsq, sqrs);
  return c;
}
console.log(f(test));
