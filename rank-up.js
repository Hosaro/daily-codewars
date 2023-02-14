// 01 February 2023

//Write a function, which takes a non-negative integer (seconds) as input and 
//returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)



// function humanReadable(seconds) {
//     let secs = seconds%60
//     let mins = seconds / 60
//     let hours = mins / 60
    // mins < 1 ? mins = 00 : (mins = Math.floor(mins)  )
    // hours < 1 ? hours = 00 : hours = Math.floor(hours)
    // seconds%60 === 0 ? secs = 00 : secs = seconds%60 * 60 / 100
// console.log(seconds)
//     console.log(seconds%60)
//     console.log (mins, hours)

//     console.log ( `${hours < 10 ? hours = '0'+hours : hours = hours }:${mins < 10 ? mins = 0+mins : mins = mins}:${secs < 10 ? secs = 0+secs : secs = secs}`)

// }


// --- 6 Feb 2023 ---
// --- Instruction : 
// Write a function that when given a URL as a string, parses out just the domain 
// name and returns it as a string. For example:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


// --- My Solution : 
// function domainName(url){
//   let truncHttp, truncW
//   if (url.includes("http://")) {
//     truncHttp = url.slice(7)
//   }
//   else if(url.includes("https://")) {
//     truncHttp = url.slice(8)
//   }
//   else truncHttp = url
//   if (truncHttp.includes("www.")) {
//     truncW = truncHttp.slice(4)
//     return truncW.slice(0, truncW.indexOf("."))
//   }
//   else {
//     return truncHttp.slice(0, truncHttp.indexOf("."))
//   }
// }

// --- Best Practice : 
// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };

//          ----           ----           -----           ----            ----            ----            ---- 


// --- 07 Feb 2023 ---
// --- Instruction : 
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// --- My Solution : 
// const doTheMath = (obj) => {

//     const {rightOperand, operand, leftOperand} = obj
//     let result = 0
   
//     if(operand === "plus"){
//         result = leftOperand + rightOperand
//     }
//     if(operand === "minus"){
//         result = leftOperand - rightOperand

//     }
//     if(operand === "dividedBy"){
//         result = Math.floor(leftOperand / rightOperand)

//     }
//     if(operand === "times"){
//         result = leftOperand * rightOperand
//     }
//     console.log("Do the math : " + result + ` operation : ${obj.leftOperand}${obj.operand}${obj.rightOperand} `)
//     return result
// }
// const checkThisOut = (nb, obj) => {
//     if(obj) {
//         obj.leftOperand = nb
//         return doTheMath(obj)
//     }
//     return {rightOperand : nb}
// }
// function zero(obj) {
//     return checkThisOut(0, obj)
// }
// function one(obj) {
//     return checkThisOut(1, obj)
// }
// function two(obj) {
//    return checkThisOut(2, obj)
// }
// function three(obj) {
//     return checkThisOut(3, obj)
// }
// function four(obj) {
//     return checkThisOut(4, obj)
// }
// function five(obj) {
//     return checkThisOut(5, obj)
// }
// function six(obj) {
//     return checkThisOut(6, obj)
// }
// function seven(obj) {
//     return checkThisOut(7, obj)
// }
// function eight(obj) {
//     return checkThisOut(8, obj)
// }
// function nine(obj) {
//     return checkThisOut(9, obj)
// }
// function plus(obj) {
//     obj.operand = "plus"
//     return obj
// }
// function minus(obj) {
//     obj.operand = "minus"
//     return obj
// }
// function times(obj) {
//     obj.operand = "times"
//     return obj
// }
// function dividedBy(obj) {
//     obj.operand = "dividedBy"
//     return obj
// }


// --- Best Practice : 
// function zero(fn) {return fn ? fn(0) : 0}
// function one(fn) {return fn ? fn(1) : 1}
// function two(fn) {return fn ? fn(2) : 2}
// function three(fn) {return fn ? fn(3) : 3}
// function four(fn) {return fn ? fn(4) : 4}
// function five(fn) {return fn ? fn(5) : 5}
// function six(fn) {return fn ? fn(6) : 6}
// function seven(fn) {return fn ? fn(7) : 7}
// function eight(fn) {return fn ? fn(8) : 8}
// function nine(fn) {return fn ? fn(9) : 9}
// function plus(n) {return function(v) {return v + n}}
// function minus(n) {return function(v) {return v - n}}
// function times(n) {return function(v) {return v * n}}
// function dividedBy(n) {return function(v) {return v / n}}

// --- Observation : 
// Returning a fonction was my blind spot. Should have thought about this
//  instead of returning an object 
//          ----           ----           -----           ----            ----            ----            ---- 

// --- 08 Feb 2023 ---
// --- Instruction :
// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// --- My Solution : 
// function deleteNth(arr,n){
//     let obj = {}
//     let indexToRemove = []
//     for (let i=0 ; i<arr.length; i++ ){
//       if(!obj[arr[i]]) {
//         obj[arr[i]] = 1
//         console.log(`${i} : create 1 ${obj}`)
//       }
//       else if(obj[arr[i]] === n){
//         indexToRemove.push(i)
//       }
//       else {
//         obj[arr[i]] = ++obj[arr[i]]
//         console.log(`${i} : added 1 ! ${obj}`)
//         }
//     } 
//     for (let i=0 ; i<indexToRemove.length;i++) {
//         arr.splice(indexToRemove[i]-i, 1)
//     }
//     console.log(indexToRemove)
//     console.log(arr)
//     return arr
//   }


// --- Best Practice : 
// function deleteNth(arr,x) {
//   var cache = {};
//   return arr.filter(function(n) {
//     cache[n] = (cache[n]||0) + 1;
//     return cache[n] <= x;
//   });
// }

//          ----           ----           -----           ----            ----            ----            ---- 
// --- 9 Feb 2023 ---
// --- Instruction : 

// --- My Solution : 

// function scramble(str1, str2) {
  
//     const oneWord = str1.split('').sort()
//     const twoWord = str2.split('').sort()

//     const result = oneWord.filter(letter => {
//         twoWord.includes(letter)).join('')
//     }
//     const result2 = twoWord.join('')

//     console.log(oneWord, twoWord, result, result2)
//     if (result === result2) console.log(true)
//     else console.log(false)
// }
 
// scramble('rkqodlw','world')
// scramble('scriptingjava',     'javascript' )
// Works but too slow ?

// function scramble(str1, str2) {
//     const oneWord = str1.split('')
//     const twoWord = str2.split('')
//     const trueFalse = []
//     for (i=0;i<twoWord.length;i++) {
//       if ( oneWord.includes(twoWord[i])){
//         oneWord.splice(oneWord.indexof(twoWord[i]), 1)
//       }
//       else {return false}
//     }
//     return true;
//   }



// 

// --- Best Practice : 
// 




// --- Interesting : 
// https://adrianmejia.com/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/#:~:text=n%20indicates%20the%20input%20size,of%20the%20input%20size%20n%20.
// Time Complexity is a thing ! 
// Big O notation en algorythmie.
//          ----           ----           -----           ----            ----            ----            ---- 


// --- 10 Feb 23 ---
// --- Instruction : 

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])

// --- My Solution : 
// function solution(input, markers) {
//     const array = [...input]
//     let afterMarker = false
//     let markerIndex 
    
//     for (marker of markers) {
//         const numb = array.filter((v) => (v === marker)).length;
//         for ( let i = 0; i < numb; i++){
//             for (let i=0; i<array.length ; i++) {
//                 const item=array[i]
//                 if(i === (array.length-1) && afterMarker === true) {
//                     array.splice(markerIndex)
//                 }
//                 else if (item === marker){
//                     afterMarker = true
//                     markerIndex = i
//                 }
//                 else if ( array[i] == "\n" && afterMarker === true) {
//                     array.splice(markerIndex, i-markerIndex)
//                     afterMarker = false
//                 }
//                 else if (item === "\n" && afterMarker === false && array[i-1] === " "){
//                     array.splice(i-1, 1)
//                 }
//             }
            
//         }    
//         if (array[array.length-1] === " ") array.splice(array.length-1)
//     } 
//     const restring= array.join('')
//     return restring
// }

// --- Best Practice : 
// function solution(input, markers) {
    

//   console.log(input.split('\n').map(
//     line => markers.reduce(
//       (line, marker) => line.split(marker)[0].trim(), line
//     )
//   ).join('\n'))
//     }
// solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])

//          ----           ----           -----           ----            ----            ----            ---- 

// --- 11 Feb 2023 ---
// --- Instruction : 
// Write an algorithm that takes an array and moves all of the zeros to 
// the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a"]

// --- My Solution : 
// function moveZeros(arr) {
//   const arrNoZero = arr.filter((item) => item !== 0)
//   const howManyZero = arr.length - arrNoZero.length
//   for (i=0; i<howManyZero; i++){
//     arrNoZero.push(0)
//   }
//   return arrNoZero
  
// }

// --- Best Practice : 
// var moveZeros = function (arr) {
//   return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }

// --- Best Practice 2 : 
// var moveZeros = function (arr) {
//     return [
//       ...(arr.filter(n => n !== 0)),
//       ...(arr.filter(n => n === 0))
//     ];
//   }

// --- Observation : éviter les for loops au maximum. 
//          ----           ----           -----           ----            ----            ----            ---- 

// --- 12 Feb 23 ---
// --- Instruction : 
// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

// [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

// --- My Solution : 
// function tribonacci(signature,n){
//   let result = []
//   if(n==0)return result
//   else if(n<3) {
//     for (i=0; i<n;i++){
//       result.push(signature[i])
//     }
//     return result
//   }
//   else {
//   result = [...signature]
//   result.push(signature.reduce((a,b) => a+b))

//   for(i=1; i<(n-3); i++){
//     console.log(result)
//     const newItem = [result[i],result[i+1],result[i+2] ]
//     console.log(newItem)
//     result.push(newItem.reduce((a, b) => a+b))
//     console.log(result)
//   }
//   return result
//     }
// }

// --- Best Practice : 
// function tribonacci(signature,n){  
//   for (var i = 0; i < n-3; i++) { // iterate n times
//     signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
//   }
//   return signature.slice(0, n); //return trib - length of n
// }

// --- Observation : A refaire !! 
//          ----           ----           -----           ----            ----            ----            ---- 


// --- 13 Feb 23 ---
// --- Instruction : 
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


// --- My Solution : 
// function generateHashtag (str) {
//     if (str == "") return false 
//     const result = str.split(" ").map(item => item == "" ? "" : item[0].toString().toUpperCase() + item.slice(1).toLowerCase()).join("")
//     return result.length > 139 || result == "" ? false : "#" + result
//   }

// --- Best Practice : 
// function generateHashtag (str) {
//     if(!str || str.length < 1) return false;
   
//     var r = '#' + str.split(' ').map(function(el) {
//       return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
//     }).join('');
//     return r.length > 140?false:r;
//  }

//          ----           ----           -----           ----            ----            ----            ---- 


// --- 14 Feb 23 ---
// --- Instruction : 
// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

// Have fun!

// --- My Solution : 
// function pickPeaks(arr){
//   let pos = []
//   let peaks = []
//   for (let i=0, plateau=false, posPlateau;i<arr.length;i++) {
//     if (arr[i] > arr[i-1] && plateau == true) {
//       plateau = false
//       if(arr[i] > arr[i+1]) {
//             pos.push(i)
//             peaks.push(arr[i])
//         }
//       else if (arr[i] == arr[i+1] && arr[i] > arr[i-1]){
//            plateau=true
//             posPlateau = i
//         }
//     }
//     else if (arr[i] > arr[i+1] && arr[i] > arr[i-1] ){
//       pos.push(i)
//       peaks.push(arr[i])
//     }
//     else if (arr[i] == arr[i+1] && arr[i] > arr[i-1]){
//       plateau=true
//       posPlateau = i
//     }
//     else if (arr[i] < arr[i-1] && plateau == true){
//       pos.push(posPlateau)
//       peaks.push(arr[posPlateau])
//       plateau = false
//     }
    
//   }
//   return {pos, peaks}
// }

// --- Best Practice : 
//---- #1 
// function pickPeaks(arr){
//   var result = {pos: [], peaks: []};
//   if(arr.length > 2) {
//     var pos = -1;
//     for(var i=1; i<arr.length;i++){
//       if(arr[i] > arr[i-1]) {
//         pos = i;
//       } else if(arr[i] < arr[i-1] && pos != -1) {
//         result.pos.push(pos);
//         result.peaks.push(arr[pos]);
//         pos = -1;
//       }
//     }
//   }
//   return result;
// }
// --- #2
// function pickPeaks(arr){
//     var result = {pos: [], peaks: []};
//     var pos;
//     var peak;
//     if(arr.length === 0) {return result;}
    
//     arr.reduce((prev, curr, index) => {
//       if(curr > prev) {
//         pos = index;
//         peak = curr;
//       } else if(curr < prev && pos >= 0) {
//         result.pos.push(pos);
//         result.peaks.push(peak);
//         pos = -1;
//       }
      
//       return curr;
//     });
    
//     return result;
//     //  return {pos:[],peaks:[]}
//   }


//          ----           ----           -----           ----            ----            ----            ---- 