var firstEntry = []
var secondEntry = []
var operator = []

var digits = document.querySelectorAll(".digits li button")
  for(var i = 0; i < digits.length; i++){
  var li = digits[i]
  li.addEventListener("click", addDigit)
}

function addDigit(event) {
   var output = document.querySelector("#display")
   output.innerText += event.target.innerText
   var output2 = document.querySelector("#display2")
   output2.innerText += event.target.innerText
   }

function operation (){
   firstEntry.push(display.innerText)
   operator.push(event.target.innerText)
   display.innerText = ""
   var operator2 = document.querySelector("#display2")
   operator2.innerText += event.target.innerText
   }

 function equal (operate) {
   secondEntry.push(display.innerText)
   var equal2 = document.querySelector("#display2")
   equal2.innerText += event.target.innerText
   operate = operator[0]
   if  (operate === '+') {
   var z= parseFloat(firstEntry) + parseFloat(secondEntry)
   } else if (operate === '-') {
   var z = parseFloat(firstEntry) - parseFloat(secondEntry)
   } else if (operate === '*') {
   var z = parseFloat(firstEntry) * parseFloat(secondEntry)
   } else if (operate === '/') {
   var z = parseFloat(firstEntry) / parseFloat(secondEntry)
   } display.innerText = "your result is: " + z
   }

 function clearing () {
   display.innerText = ""
   display2.innerText = ""
   firstEntry.splice(0)
   secondEntry.splice(0)
   operator.splice(0)
   }

   function plusmin () {
   display.innerText = display.innerText * -1
   display2.innerText = display2.innerText * -1
   display2.innerText = ''
   }

   // function addition () {
   //   firstEntry.push(display.innerText)
   //   operator.push("+")
   //   display.innerText = ""
   //   var operator2 = document.querySelector("#display2")
   //   operator2.innerText += event.target.innerText
   // }
   //
   // function subtraction () {
   //   firstEntry.push(display.innerText)
   //   operator.push("-")
   //   display.innerText = ""
   //   var operator2 = document.querySelector("#display2")
   //   operator2.innerText += event.target.innerText
   // }
   //
   // function multiplication () {
   //   firstEntry.push(display.innerText)
   //   operator.push("*")
   //   display.innerText = ""
   //   var operator2 = document.querySelector("#display2")
   //   operator2.innerText += event.target.innerText
   // }
   //
   // function division () {
   //   firstEntry.push(display.innerText)
   //   operator.push("/")
   //   display.innerText = ""
   //   var operator2 = document.querySelector("#display2")
   //   operator2.innerText += event.target.innerText
   // }

   // function combine () {
   //   var c = firstEntry + operator + secondEntry
   // }
