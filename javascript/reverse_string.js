function reverseString(str) {
  /*
    Example:
    Define a function called reverseString that takes a string as an input parameter.
    Initialize an empty string called reversedString.
    Create a loop that iterates through each character in the input string in reverse order:
    a. Append each character to reversed_string.
    Return the reversed_string
  */
  /*
    Example:
    change string into an array
    split the array into individual letters
    then loop from the last letter to the first letter
    return each letter
    change array back into an string
  */
  /* 
    Example:
    Reverse a string
    We can start at the back of the string and add each letter to a new string starting from the last letter then going to the first letter
    We can use a for loop to iterate through the string starting at the last letter and going to the first letter
    We can use the length of the string to determine the last letter
    We can use the += operator to add the letter to the new string
  */
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
