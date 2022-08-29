// Question-1 | Find longest and shortest string from Input string. 
function checkString() {
    var stringInput = document.getElementById("string").value;
    // alert(stringInput);

    var strSplit = stringInput.split(' ');

    var longest = 0; 
    var longword = null; 
    for (var i = 0; i <= strSplit.length - 1; i++){
        if (longest < strSplit[i].length) {
            longest = strSplit[i].length; 
            longword = strSplit[i];
        }
    }
    
    document.getElementById("long-string").innerHTML = longword;

    let shortestWord = strSplit[0];
    
    for (let word of shortestWord) {
        if (word.length < shortestWord.length) {
            word = shortestWord; 
        }
    }

    document.getElementById("short-string").innerHTML = shortestWord; 
}

// Question-2 | BMI Calculator
function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    var result = (weight / ((height * height) /10000)).toFixed(2);

    document.getElementById("bmi-result").innerHTML = result; 

    if (result < 18) {
        document.getElementById("bmi-value").innerHTML = "You are in Underweight";
    }
    else if (result >= 18 && result <= 25) {
        document.getElementById("bmi-value").innerHTML = "You are in normal weight";
    }
    else if (result > 25 && result <= 30) {
        document.getElementById("bmi-value").innerHTML = "You are in Overweight";
    }
    else {
        document.getElementById("bmi-value").innerHTML = "Your weight is too high!!! OBESE";
    }
}

// Question-3 | Fruit Farm
var fruitarr = ["apple.jpg", "dragon-fruit.jpg", "grapes.jpg", "mango.jpg", "orange.jpg", "pineapple.jpg", "watermelon.jpg"];
document.getElementById("garden").innerHTML = "<img src=assets/images/apple.jpg width=100px height=100px>";


// Question-4 | 