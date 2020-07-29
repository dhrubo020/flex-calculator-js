function print(){
    for(var i=0; i<arguments.length; i++){
        console.log(arguments[i]+" ");
    }
}
//-----------------------

window.onload = function () {
    //code starting from here
    var number = "";
    var point = 0;
    var sign = "";
    var arr = [];
    var now = "";
    
    function makeNumber(value){
        print(value);
        if(value == "."){
            number = number+".";
        }else{
            number = number+value;
        }
        // let view = "";
        // for(var i=0; i<arr.length; i++){
        //     if(arr[i]!= "="){
        //         view = view+arr[i];
        //     }
        // }
        document.getElementById("display").value += number;
    }
    function setUp(operator){
        if(number != ""){
            arr.push(number);
            number = "";
        }
        if(arr[arr.length-1] >= "0" && arr[arr.length-1] <="9"){
            arr.push(operator);
        }
        
        let view = "";
        for(var i=0; i<arr.length; i++){
            if(arr[i]!= "="){
                view = view+arr[i];
            }
        }
        //now = document.getElementById("display").value;
        document.getElementById("display").value = view;
        point = 0;
    }

    function calculate(){
        point = 0;
        var ans = 0;
        var before = parseFloat(arr[0]);
        var after = "";
        for(var i=0; i<arr.length; i++){
            print(arr[i]);
        }
       for(var i=1; i<arr.length; i++){
           after = parseFloat(arr[i+1]);
        //    if(i%2==1){
                var operator = arr[i];
                if(operator == "+"){
                    ans = before+after;
                    before = ans;
                }
                else if(operator == "-"){
                    ans = before - after;
                    before = ans;
                }
                else if(operator == "x"){
                    ans = before*after;
                    before = ans;
                }
                else if(operator == "/"){
                    ans = before / after;
                    before = ans;
                }
        //    }
           print(ans);
       }
        now = document.getElementById("display").value
        print("now " +now);
        now = eval(now);
        print("now " +now);
        ans = now;
       document.getElementById("result").value = ans;
        arr = [];
        //arr.push(ans);
        number = "";
    }

    var classList = document.getElementsByClassName("btn");
    for (var i = 0; i < classList.length; i++) {
        classList[i].addEventListener("click",function(){
            previous = this.textContent;
            this.value = previous;
            print(this.value)

            if(arr.length == 0){
                document.getElementById("display").value="";
                document.getElementById("result").value="";
            }
            if(this.value >= "0" && this.value<="9"){
                makeNumber(this.value);
            }

            else if(this.value == "." && point == 0){
                makeNumber(this.value);
                point = 1;
            }
            else if(this.value=="(" || this.value==")" || this.value == "+" || this.value == "-" || this.value == "x" ||this.value == "/"){
                setUp(this.value);
                point = 1;
            }
            else if(this.value == "="){
                setUp(this.value);
                calculate();
            }
            else if(this.value == "C"){
                document.getElementById("display").value="";
                document.getElementById("result").value="";
                arr = [];
                number = "";
            }
            else if(this.value == "<"){
            document.getElementById("result").value="";
               var now =  document.getElementById("display").value.slice(0, -1);
               document.getElementById("display").value = now;
            }
            else{
                // ( ) btn
            }
        })
    }

}