import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/age.js';
import LifeExp from './js/lifeExp';

window.addEventListener("load", function(){
  const ageForm = document.getElementById('userAge');
  ageForm.addEventListener("submit", ageCalc);
  const expForm = document.getElementById('lifeExpect');
  ageForm.addEventListener("submit", );
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
  console.log(galacticAge);
  return galacticAge;
}

function getExpFormData() {
let smokerCheck = document.getElementById("ageInput").value
}