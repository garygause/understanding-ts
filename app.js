function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// function type
var combineValues;
combineValues = add;
console.log(combineValues(8, 5));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
