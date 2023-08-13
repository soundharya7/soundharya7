

document.getElementById('ButtonId_Plus').addEventListener('click', function () {
    debugger
    var string = document.getElementById('Id1').value;
    var value = null;
    if ([null, undefined, ""].includes(string)) {
        value = "You do not enter any input!"
    }
    else {
       var str = string.toLowerCase().replace(/[^a-z0-9]/g, '');
       const reversedStr = str.split('').reverse().join('');

     
        if (str == reversedStr) {
            vapmlue = "Its palindrome";
        } else { value = "Its not palindrome" }
    }

    document.getElementById('showanswer').innerHTML = value;
})