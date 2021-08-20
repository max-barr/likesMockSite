var countElement = document.querySelector("#number");

var count = 3;

function add1() {
    count++;
    countElement.innerText = count;
    console.log(count);
}