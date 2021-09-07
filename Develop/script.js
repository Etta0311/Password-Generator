// Special Character
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numeric characters
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabetical characters -- Lowercase
var loweralpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Alphabetical characters -- Uppercase
var upperalpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password requirement
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? Choose between 8 and 128"));

  if(!confirmLength){
    alert("It needs a value to continue."); 
    return confirmLength();
   }

   else if (confirmLength < 8 || confirmLength > 128)  {
    alert("Password length must be between 8 - 128 characters. Try again.");
    return confirmLength();
  }

  var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters.");
  var confirmNumber = confirm("Click OK to confirm if you would like to include numbers.");
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

  while(
    confirmUpperCase === false && 
    confirmLowerCase === false && 
    confirmSpecialCharacter === false && 
    confirmNumber  === false) {
    alert("You must choose at least one parameter");

    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumber  = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters"); 
  }

  var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(character)
    }

    if (confirmNumber) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(loweralpha)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperalpha)
    }

      console.log(passwordCharacters)

      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
