/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd(arr){
arr.push("Colin")
return arr
}
addMeToEnd(["One", "Two", "Three"])


function addMeToStart(arr1){
  arr1.unshift("Colin")
return arr1
} addMeToStart(["One", "Two", "Three"])

function changeLast(arr2, givenNumber){
  //let givenNumber = 5;
  arrLen = Number(arr2.length - 1)
  arr2.splice((arrLen), 1, givenNumber)
  return arr2
} changeLast([1, 2, 3])

function changeAllValuesTo(arr3, newValue){
  for (i = 0; i < arr3.length; i++){
    arr3[i] = newValue
  }return arr3
}

function oddOrEven(arr4){
  for (i = 0; i < arr4.length; i++){
    if (arr4[i] % 2 === 0){
      arr4[i] = "even"
    } else if (arr4[i] % 2 !== 0){
      arr4[i] = "odd"
    }
  }
  return arr4
}

function changeNextThreeToValue( start1, arr5, value1){

  for (i = start1; i < start1 + 3; i++){
    arr5[i] = value1
  }


} 




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
