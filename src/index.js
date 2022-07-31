import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/age.js';
import LifeExp from './js/lifeExp';

window.addEventListener("load", function(){
  const ageForm = document.getElementById('userAge');
  ageForm.addEventListener("submit", ageCalc);
  const expForm = document.getElementById('lifeExpect');
  expForm.addEventListener("submit", lifeExpCalc);
});

function getAgeFormData() {
  let userAge = parseInt(document.getElementById("ageInput").value);
  console.log(userAge);
  return userAge;
}

function ageCalc(e) {
  e.preventDefault();
  let age = getAgeFormData();
  let galacticAge = new Age(age);
  ageDisplay(galacticAge);
}

function ageDisplay(ageObject) {
  document.getElementById("earthAge").innerText = " " + ageObject.earthYears;
  document.getElementById("mercuryAge").innerText = " " + ageObject.mercuryYears + " (wow...you're old!)";
  document.getElementById("venusAge").innerText = " " + ageObject.venusYears;
  document.getElementById("marsAge").innerText = " " + ageObject.marsYears;
  document.getElementById("jupiterAge").innerText = " " + ageObject.jupiterYears;
}

function lifeExpCalc(e) {
  e.preventDefault();
  getExpFormData();
}

function getExpFormData() {
let sexCheck = document.querySelector("input[name='sex']:checked").value;
let smokerCheck = document.querySelector("input[name='smoker']:checked").value;
let returnArray = [sexCheck, smokerCheck];
console.log(returnArray);
return returnArray;
}