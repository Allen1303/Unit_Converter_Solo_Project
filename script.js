"use strict"
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputBox = document.getElementById("input-box")
const convertBtn = document.getElementById("convert-btn")

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPounds = 2.204


function convertUnits() {
//multiply the input value by the feet equivalent and divide the input value by the feet value to get meter value,render the results dynamically.then repeat the process for all other units
let inputValue =  Number(inputBox.value); 
let meterConversion = inputValue * meterToFeet;

let literConversion = inputValue * literToGallon;
console.log(`${inputValue} liters = ${literConversion.toFixed(3)} gallons`);

console.log(meterConversion.toFixed(3));
}
console.log(convertUnits());

convertBtn.addEventListener("click", convertUnits)  