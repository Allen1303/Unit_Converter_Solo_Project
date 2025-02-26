"use strict";

const inputBox = document.getElementById("input-box");
const convertBtn = document.getElementById("convert-btn");
const metersAndFeet = document.getElementById("meters-feet");
const litersAndGallons = document.getElementById("liters-gallons");
const kilosAndPounds = document.getElementById("kilos-pounds");

const metersToFeet = 3.281;
const litersToGallon = 0.264;
const kilogramToPounds = 2.204;

function convertUnits() {
  let inputValue = Number(inputBox.value);
  
  // Error handling with early return
  if (!inputValue && inputValue !== 0) {
    alert("Enter valid number");
    inputBox.focus();
    return; // Stop execution if invalid input
  }
  
  // Only execute these calculations if input is valid
  metersAndFeet.textContent = `${inputValue} meters = ${(inputValue * metersToFeet).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / metersToFeet).toFixed(3)} meters`,
      
  litersAndGallons.textContent = `${inputValue} liters = ${(inputValue * litersToGallon).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / litersToGallon).toFixed(3)} liters`,


  kilosAndPounds.textContent =`${inputValue} kilos = ${(inputValue * kilogramToPounds).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / kilogramToPounds).toFixed(3)} kilos`
}

convertBtn.addEventListener("click", convertUnits);