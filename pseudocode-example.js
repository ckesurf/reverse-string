// find the maximum two numbers in an array
// I'm assuming non-empty array

// [12, 4, 8, 300, 6] => [300, 12]
// [12, 4, 8, 300, 300] => [300, 300]
// [-1, 'a'] => return -1, or throw an error

// for(...)
// return
// if 
// comparators like >
// let

// started the first element
// initialize a variable that holds the maximum
let maximum = array[0];

// compared it with all the others
// iterate through all the numbers in the array
// for each element, ask the following:
// for(start; continue; step)
for (let i = 1; i < array.length; i++) {
  // well, which one is bigger?
  // if mine is bigger, then go on to the next one
  if (maximum > array[i]){
    continue; // do nothing
  } else {
    // if the element i'm comparing is bigger, 
    //  then that's then new "champion", and the one I stick with going forward
    maximum = array[i]
  }

}

// find first maximum => 300

// took out that number

// then, find second maximum => 12

// return... 
[300, 12]
// or 
[12, 300]
// or 
{
  "first": 300, "second": 12
}
