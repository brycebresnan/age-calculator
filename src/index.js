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
  let liExpArray = getExpFormData();
  let lifeExpect = new LifeExp(getAgeFormData());
  lifeExpect.expectancy(liExpArray[0],liExpArray[1]);
  lifeExpDisplay(lifeExpect);
}

function getExpFormData() {
  let sexCheck = document.querySelector("input[name='sex']:checked").value;
  let smokerCheck = document.querySelector("input[name='smoker']:checked").value;
  let returnArray = [sexCheck, smokerCheck];
  return returnArray;
}

function lifeExpDisplay(expObj) {
  if (isNaN(expObj.age)) {
    document.getElementById("longLivedCheck").innerText = "Please enter an age to calculate in the form above!";
  } else {
    if (expObj.age > expObj.expect) {
      document.getElementById("longLivedCheck").innerText = "Holy cow! You beat the odds and lived past your expected life span! Here's how long you've kept yourself foot of the galactic grave:";
    } else {
      document.getElementById("longLivedCheck").innerText = "This is how little you've got left:";
    }
    document.getElementById("expectancy").innerText = " " + expObj.expect;
    document.getElementById("earthExp").innerText = " " + expObj.lifeLeft;
    document.getElementById("mercuryExp").innerText = " " + expObj.mercLeft;
    document.getElementById("venusExp").innerText = " " + expObj.venusLeft;
    document.getElementById("marsExp").innerText = " " + expObj.marsLeft;
    document.getElementById("jupiterExp").innerText = " " + expObj.jupLeft;
  }
}