// Function to generate password based on user input
function generatePassword() {
    // Prompt the user for password length and convert it to an integer
    let length = parseInt(prompt("Enter the length of the password (8-128 characters):"));
  
    // Confirm password length
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Invalid length. Please enter a number between 8 and 128.");
      return "";
    }
    
    // Prompt for character types
    let useLower = confirm("Include lowercase characters?");
    let useUpper = confirm("Include uppercase characters?");
    let useNumeric = confirm("Include numbers?");
    let useSpecial = confirm("Include special characters?");
    
    // Validate that at least one character type is selected
    if (!useLower && !useUpper && !useNumeric && !useSpecial) {
      alert("At least one character type should be selected.");
      return "";
    }
    
    // Define character sets
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?/[]{}|~";
    
    // Initialize a string to hold allowed characters based on user selection
    let allowedChars = "";
    if (useLower) allowedChars += lowerChars;
    if (useUpper) allowedChars += upperChars;
    if (useNumeric) allowedChars += numericChars;
    if (useSpecial) allowedChars += specialChars;
    
    // Initialize password and generate it using a for loop! :)
    let password = "";
    for (let i = 0; i < length; i++) {
      password += allowedChars[Math.floor(Math.random() * allowedChars.length)];
    }
    
    return password;
  }
  
  // Get a reference to the "Generate Password" button
  var generateBtn = document.querySelector("#generate");
  
  // Function to write the generated password to the password text area
  function writePassword() {
    // Generate the password
    var password = generatePassword();
  
    // Get a reference to the password text area
    var passwordText = document.querySelector("#password");
    
    // Update the text area with the generated password
    passwordText.value = password;
  }
  
  // Add click event listener to the "Generate Password" button
  generateBtn.addEventListener("click", writePassword);
  