def reverse_string(str) 
  # Example
  # type your code in here
  # 1. return a new string with the reverse order
  # 3. Test cases:
  #   Input: cat
  #   Output: tac
  # 4. Psuedocode:
  # convert string to an array
  arr = str.split(“”)
  # initialize a new array
  newarr = []
  # iterate over the string array starting from the last position
  arr.each do |x|
  end
  # add each letter to the new array (push)
  # convert the new array into a string
  #return the string
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution