// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Variables storing password parameters
var pwLength;
var pwSpecial;
var pwUpper;
var pwLower;
var pwNumeric;

var pwLengthBool;
var pwSpecialBool;
var pwUpperBool;
var pwLowerBool;
var pwNumericBool;

// Defining arrays to hold possible password characters
const specialArray = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+',
                      ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '_', '`', '{', '}', '~'];
const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const alphabetUpper = alphabetLower.toString().toUpperCase().split(",");
const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var pwCharPool = [];

// Begin sequence of prompts
generateBtn.addEventListener("click", startPrompt);
function startPrompt() {
  // Ask for desired password length
  for (; pwLengthBool == undefined;){
    pwLength = prompt("What length should the password be? (8-128char)");
    if (pwLength > 7 && pwLength < 129) {
      pwLengthBool = true;
    } else if (typeof pwLength === 'string') {
      alert('Password length invalid, please try again.');
    } else if (pwLength === null) {
      return;
    }
  }

  // Ask if special characters should be used
  for (; pwSpecialBool == undefined;){
    pwSpecial = prompt("Should special characters be included? (Y/N)");
    if (pwSpecial == "y") {
      pwSpecialBool = true;
      pwCharPool = pwCharPool.concat(specialArray);
    } else if (pwSpecial == 'n'){
      pwSpecialBool = false;
    } else if (pwSpecial === null){
      return;
    } else {
      alert('Invalid entry, please try again.');
    }
  }

  // Ask if uppercase characters should be used
  for (; pwUpperBool == undefined;){
    pwUpper = prompt('Should the password include uppercase characters? (Y/N)');
    if (pwUpper == "y") {
      pwUpperBool = true;
      pwCharPool = pwCharPool.concat(alphabetUpper);
    } else if (pwUpper == 'n') {
      pwUpperBool = false;
    } else if (pwUpper === null) {
      return;
    } else {
      alert('Invalid entry, please try again.');
    }
  }

  // Ask if lowercase characters should be used
  for (; pwLowerBool == undefined;) {
    pwLower = prompt('Should the password include lowercase characters? (Y/N)');
    if(pwLower == 'y') {
      pwLowerBool = true;
      pwCharPool = pwCharPool.concat(alphabetLower);
    } else if (pwLower == 'n') {
      pwLowerBool = false;
    } else if (pwLower === null) {
      return;
    } else {
      alert('Invalid entry, please try again.');
    }
  }

  // Ask if numbers should be used
  for (; pwNumericBool == undefined;) {
    pwNumeric = prompt('Should the password include numbers? (Y/N)');
    if(pwNumeric == 'y') {
      pwNumericBool = true;
      pwCharPool = pwCharPool.concat(numbersArray);
    } else if (pwNumeric == 'n') {
      pwNumericBool = false;
    } else if (pwNumeric === null){
      return;
    } else {
      alert('Invalid entry, please try again.');
    }
  }
  if (pwSpecialBool === false && pwUpperBool === false && pwLowerBool === false && pwNumericBool === false){
    alert("Hm, it appears you don't want any characters in your password, try again.");
    pwSpecialBool = undefined;
    pwUpperBool = undefined;
    pwLowerBool = undefined;
    pwNumericBool = undefined;
    return;
  }
  }
  function generatePassword() {
    for(let i = 0; i < pwLength; i++) {
    const randomChar = Math.floor(Math.random()*pwCharPool.length);
    const pwChar = pwCharPool[randomChar];
    return pwChar;
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
