"use strict";

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Cesta musi byt tak aby to fungovalo ked spustame transpilovany subor Babelom z "./lib/index.js"
var textInput = _fs["default"].readFileSync('../dataInput.txt', 'utf8').trim().split(' ').map(function (e) {
  return Number(e);
}); // const hardInput = [-1,3,-4,5,1,-6,2,1]
// const hardInput = [0, -2147483648, -2147483648]


var solution = function solution() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : textInput;
  var length = arguments.length > 1 ? arguments[1] : undefined;
  var prevs = []; //Sum of elements on the left from the current value

  var sum = array.reduce(function (prev, curr) {
    prevs.push(prev);
    return prev + curr;
  }, 0);
  var result = array.map(function (current, i) {
    var sum_do = prevs[i];
    var sum_po = sum - sum_do - current;
    if (sum_do - sum_po === 0) return i;
  }).filter(function (x) {
    return x !== undefined;
  });
  return result.length === 0 ? -1 : result;
};

_fs["default"].writeFileSync('../dataOutput.txt', JSON.stringify(solution().toString()));

console.log("Result has been written to dataOutput.txt");