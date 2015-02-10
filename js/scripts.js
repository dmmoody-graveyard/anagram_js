var anagram = function(first_word, words) {
  var firstword = first_word.toLowerCase().split('').sort()
  var word_test = []
  words.forEach(function(elements) {
    var word_list = elements.toLowerCase().split('').sort()
    var is_same = firstword.every(function(element, index) {
      return element === word_list[index];
    });
     if (is_same === true) {
       word_test.push(elements)
     }
  });
  return word_test
};


// (firstword.length === word_list.length) &&
