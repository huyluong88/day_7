var firstEntry = []
var secondEntry = []
var operator = []

var digits = document.querySelectorAll(".digits li button")
for(var i = 0; i < digits.length; i++){
 var li = digits[i]
 li.addEventListener("click", addDigit)
}

function addDigit(event) {
   var newDigit = document.createElement("li")
   newDigit.innerText = event.target.innerText
   var output = document.querySelector("#display")
   output.appendChild(newDigit)
   console.log(newDigit.innerText)
 }


 function addition () {
   firstEntry.push(display.innerText)
   operator.push("+")
   display.innerText = ""
 }

 function subtraction () {
   firstEntry.push(display.innerText)
   operator.push("-")
   display.innerText = ""
 }

 function multiplication () {
   firstEntry.push(display.innerText)
   operator.push("*")
   display.innerText = ""
 }

 function division () {
   firstEntry.push(display.innerText)
   operator.push("/")
   display.innerText = ""
   console.log(firstEntry)
 }

 function clearing () {
   display.innerText = ""
   firstEntry.splice(0)
   secondEntry.splice(0)
   operator.splice(0)

 }


 function equal (operate) {
     secondEntry.push(display.innerText)
     operate = operator[0]
     if  (operate === '+') {
        var z= parseFloat(firstEntry) + parseFloat(secondEntry)
     } else if (operate === '-') {
           var z = parseFloat(firstEntry) - parseFloat(secondEntry)
     } else if (operate === '*') {
           var z = parseFloat(firstEntry) * parseFloat(secondEntry)
     } else if (operate === '/') {
           var z = parseFloat(firstEntry) / parseFloat(secondEntry)
     } display.innerText = z
   }






   // function operator () {
   //   firstEntry.push(display.innerText)
   //   display.innerText = ""
   //   console.log(firstEntry)
   // }



   // function equal (operator) {
   //   secondEntry.push(display.innerText)
   //   var z= parseFloat(secondEntry) + parseFloat(firstEntry)
   //   display.innerText = z
   // }




// function operate (operator) {
//     var x = document.querySelector("firstEntry").value;
//     var y = document.querySelector("secondEntry").value;
//     if  (operator === '+') {
//       var z = +x + +y;
//     } else if (operator === '-') {
//       var z = +x - +y;
//     } else if (operator === '*') {
//       var z = +x * +y;
//     } else if (operator === '/') {
//       var z = +x / +y;
//    }
//    document.querySelector("#total").innerHTML = z;
//  }



 // Create an array of numbers, where the buttons are like:
 // var  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 // <a OnClick= numbers[0]>0</a>
