function print() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i] + " ");
    }
}
//-----------------------

window.onload = function () {
    //code starting from here
    var number = "";
    var point = 0;
    var arr = [];
    var now = "";
    var count = 0;

    function makeNumber(value) {
        number = number + value;
        document.getElementById("display").value = number;
    }
    function setUp(operator) {
        
        // push the number
        if (number != "") {
            if (number != ".") {
                arr.push(number);
            }
            number = "";
        }

        // for first + - number
        var operatorPush = 0; // handling first + - operator 
        if ((operator == "-") && (arr.length == 0)) {
            arr.push(operator);
            operatorPush = 1;
        }

        // push operator if there is a number before it   
        var checkNumber = parseFloat(arr[arr.length - 1]);
        print("checkNumber " + checkNumber);
        if (!isNaN(checkNumber) && operator != "=" && operator != "<" && operatorPush == 0) {
            arr.push(operator);
        }

        let view = "";
        for (var i = 0; i < arr.length; i++) {
            view = view + arr[i];
            print("i " + arr[i]);
        }
        //now = document.getElementById("display").value;
        document.getElementById("display").value = view;
        point = 0;
    }

    function calculate() {
        point = 0;
        var ans = 0;

        // if last value of array is a operator then set last value=0
        var checkNumber = parseFloat(arr[arr.length - 1]);
        if (isNaN(checkNumber)) {
            alert("Invalid input");
            return ;
        }

        for (var i = 0; i < arr.length; i++) {
            now += arr[i];
        }
        
        print("now " + now);
        ans = eval(now);
        ans =ans.toFixed(4);
        document.getElementById("result").value = ans;
        number = "";
        now="";
    }

    function clear(){
        document.getElementById("display").value = "";
        document.getElementById("result").value = "";
        number = "";
        now="";
        arr = [];
    }

    // btn click
    
    var classList = document.getElementsByClassName("btn");
    for (var i = 0; i < classList.length; i++) {
        classList[i].addEventListener("click", function () {
            if(count > 0){
                clear();
                count=0;
            }
            var char = this.textContent;
            print("btn click " + char)
           
            if (char >= "0" && char <= "9") {
                makeNumber(char);
            }

            else if (char == "." && point == 0) {
                makeNumber(char);
                point = 1;
            }
            else if (char == "+" || char == "-" || char == "*" || char == "/") { 
                setUp(char);
            }
            else if (char == "=") {
                setUp(char);
                calculate();
                count++;
            }
            else if (char == "C") {
                clear();
            }
            else if (char == "<") {
                clear();
            }
            else {
                // ( ) btn
            }
        })
    }

}