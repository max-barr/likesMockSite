let countElement = document.querySelector("#likes1");
let countElement2 = document.querySelector("#likes2");
let countElement3 = document.querySelector("#likes3");

let count = 9;
let count2 = 12;
let count3 = 9;

function add1() {
    count++;
    countElement.innerText = count + " like(s)";
    console.log(count);
}

function add2() {
    count2++;
    countElement2.innerText = count2 + " like(s)";
    console.log(count2);
}

function add3() {
    count3++;
    countElement3.innerText = count3 + " like(s)";
    console.log(count3);
}


