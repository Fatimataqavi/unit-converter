/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const units={
    Length: ["meters", "feet"],
    volume: ["liters", "gallons"],
    mass:["kilos","pounds"]
}
const inputNum = document.getElementById("input-num")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const meterToFeet=3.281
const leterToGallon= 0.264
const kiloToPound= 2.204

convertBtn.addEventListener("click", function(){
   let number=inputNum.value
    lengthEl.textContent= `${number} ${units.Length[0]} = ${number * meterToFeet} ${units.Length[1]} | ${number} ${units.Length[1]} = ${meterToFeet / number} ${units.Length[0]}`
    volumeEl.textContent= `${number} ${units.volume[0]} = ${number * leterToGallon} ${units.volume[1]} | ${number} ${units.volume[1]} = ${leterToGallon / number} ${units.volume[0]}`
    massEl.textContent= `${number} ${units.mass[0]} = ${number * kiloToPound} ${units.mass[1]} | ${number} ${units.mass[1]} = ${kiloToPound / number} ${units.mass[0]}`
})

