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
function grow(){
    var row = document.getElementById('row').value; 
    var column = document.getElementById('column').value; 
    var imgArray = ["assets/images/apple.jpg", "assets/images/orange.jpg"];
    var garden = document.getElementById('garden');

    for(let i=0; i<row; i++){
        for (let j=0; j<column; j++){
            var fruits = Math.floor(Math.random() * 2);
            var img = '<img src=' + imgArray[fruits] + ' width="150px" height="150px"></img>';
            garden.innerHTML += img; 
        }
        garden.innerHTML+="<br>";
    }
}

function refreshPage(){
    window.location.reload(); 
}


// Question-4 | Currency Converter
function convertCurrecny() {
    var userInput = parseFloat(document.getElementById('amount').value);
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;

    if (from == "US Dollar" && to == "Indian Rupee") {
        document.getElementById('currency_result').innerHTML = (userInput * 79.71);
    } else if (from == "Indian Rupee" && to == "US Dollar") {
        document.getElementById('currency_result').innerHTML = (userInput * 0.013);
    } else if ((from == "US Dollar" && to == "US Dollar") || (from == "Indian Rupee" && to == "Indian Rupee")) {
        document.getElementById('currency_result').innerHTML = "Same currencies can't be converted!!!";
    }

}

// Question - 5 | Coin Flip
function coinFlip(){
    var image = document.getElementById('coin-img');
    var head = document.getElementById('nos-head');
    var tail = document.getElementById('nos-tail');

    var parseHead = parseInt(head.innerHTML);
    var parseTail = parseInt(tail.innerHTML);

    var imageArr = ['coin-head.jpg', 'coin-tail.jpg'];

    var rand = Math.floor(Math.random() * 2);

    if(imageArr[rand] == imageArr[0]){
        head.innerHTML = parseHead + 1; 
    }
    else{
        tail.innerHTML = parseTail + 1; 
    }
    image.src = "assets/images/"+imageArr[rand];
}


// Question - 6 | Birthday Cake order Form
function cakeOrder() {
    var small = document.getElementById('small').value; 
    var medium = document.getElementById('medium').value; 
    var large = document.getElementById('large').value; 

    var total = (small * 100) + (medium * 200) + (large * 400);
    var taxAmount = ((9 / 100) * total) + total; 

    var radioBtn = document.querySelector('input[name="tip"]:checked').value; 
    var tip = ((radioBtn / 100) * taxAmount); 
    var totalCost = taxAmount + tip; 

    document.getElementById('total-price').innerHTML = totalCost;
}