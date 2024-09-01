//First Watch
var count = 0;
function add() {
    count++;
    show();
}
function show() {
    document.getElementById("val").value = count;
}
function rest() {
    let res = 0;
    count = 0;
    document.getElementById("val").value = res;
}
function rem() {
    document.getElementById('p1').innerHTML = count;
}
// second Watch

var count1 = 0;
function add1() {
    count1++;
    show1();
}
function show1() {
    document.getElementById("val1").value = count1;
}
function rest1() {
    let res1 = 0;
    count1 = 0;
    document.getElementById("val1").value = res1;
}
function rem1() {
    document.getElementById('p2').innerHTML = count1;
}