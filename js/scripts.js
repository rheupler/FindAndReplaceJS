var findAndReplace = function(string, oldWord, newWord) {
  if (string.length === 0) {
    return "Please enter a sentence.";
  } else if (string.search(oldWord >= 0)) {
    return string.replace(oldWord, newWord);
  } else {
    return "Your word was not found."
  }
};
