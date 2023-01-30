// Homework Problem 1
// Find the smallest number in array

var myArrayUno = [6, 13, 75, 1, 21]
var min = myArrayUno[0]
for (var i = 1; i < myArrayUno.length; i++) {
  if (min > myArrayUno[i]) {
    min = myArrayUno[i]
  }
}
console.log("Homework Problem #1")
console.log("The smallest number of the array is ", min)

// Homework Problem 2
// The sum of all array elements

var sum = 0
for (var i = 0; i < myArrayUno.length; i++) {
  sum = sum + myArrayUno[i]
}
console.log("Homework Problem #2")
console.log("The sum of all array's elements is ", sum)

// Homework Problem 3
// Divide each element by two and store the result

for (var i = 0; i < myArrayUno.length; i++) {
  myArrayUno[i] = myArrayUno[i] / 2
}

console.log("Homework Problem #3")
console.log("The new array values that were divided by two are ", myArrayUno)

// Homework Problem 4
// An algorithm that counts the even numbers in the array

var myArrayDos = [6, 13, 75, 1, 21]
var even = 0
for (var i = 0; i < myArrayDos.length; i++) {
  if (myArrayDos[i] % 2){
    
  } else {
    even++
  }
}

console.log("Homework Problem #4")
console.log("There's ", even, " even number(s) in the array.")
