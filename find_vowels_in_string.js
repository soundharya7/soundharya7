

document.getElementById('ButtonId_Plus').addEventListener('click', function () {
    persistence(39)
    var string = document.getElementById('Id1').value;
    var value = null;
    if ([null, undefined, ""].includes(string)) {
        value = "You do not enter any input!"
    }
    else {
        var count = 0;

        for (let i = 0; i < string.length; i++) {
            var s = string[i].toLowerCase();
            if (['a', 'e', 'i', 'o', 'u'].includes(s)) {
                count++;
            }
        }


    }

    document.getElementById('showanswer').innerHTML = count;
})



function persistence(num) {
    //code me
    var str = String(num)
    debugger;

    if (str.length == 1) {
        return num;
    } else {
        let val = 0;
        forloop(str);    

        if (String(val).length > 1) {
            num = val;  
            forloop(num);       
        }else{
            return val;
        }
       
    }



}

function forloop(list){
    for (var i = 0; i < String(list).length; i++) {
        val += Number(String(list)[i]);

    }
}