
//Addition
document.getElementById('ButtonId_Plus').addEventListener("click", function () {
    var input1 = document.getElementById('Id1').value;
    var inpu2 = document.getElementById('Id2').value;
    let value = null;
    value = Number(input1) + Number(inpu2);
    debugger
    if([null,undefined,""].includes(input1) || [null,undefined,""].includes(inpu2)){
        value= "You are not input any number";
    }else {
        value = `You are answer is ${value}`
    }
    document.getElementById('showanswer').innerHTML = value;
})

//Minus

document.getElementById('ButtonId_minus').addEventListener("click", function () {
    var input1 = document.getElementById('Id1').value;
    var inpu2 = document.getElementById('Id2').value;
    let value = null;
    value = Number(input1) - Number(inpu2);
    debugger
    if([null,undefined,""].includes(input1) || [null,undefined,""].includes(inpu2)){
        value= "You are not input any number";
    }else {
        value = `You are answer is ${value}`
    }
    document.getElementById('showanswer').innerHTML = value;
})

//Multiply

document.getElementById('ButtonId_muktiply').addEventListener("click", function () {
    var input1 = document.getElementById('Id1').value;
    var inpu2 = document.getElementById('Id2').value;
    let value = null;
    value = Number(input1) * Number(inpu2);
    debugger
    if([null,undefined,""].includes(input1) || [null,undefined,""].includes(inpu2)){
        value= "You are not input any number";
    }else {
        value = `You are answer is ${value}`
    }
    document.getElementById('showanswer').innerHTML = value;
})

//Divition

document.getElementById('ButtonId_divition').addEventListener("click", function () {
    var input1 = document.getElementById('Id1').value;
    var inpu2 = document.getElementById('Id2').value;
    let value = null;
    value = Number(input1) / Number(inpu2);
    debugger
    if([null,undefined,""].includes(input1) || [null,undefined,""].includes(inpu2)){
        value= "You are not input any number";
    }else {
        value = `You are answer is ${value}`
    }
    document.getElementById('showanswer').innerHTML = value;
})