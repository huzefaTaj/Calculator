 //function for displaying values
 function num(val)
 {
 document.getElementById("show").value+=val
  }
 // function for evaluation
 function solve()
 {
 let x = document.getElementById("show").value
 let y = eval(x)
 document.getElementById("show").value = y
 }
 //function for clearing the display
 function clr()
 {
 document.getElementById("show").value = ""
 }