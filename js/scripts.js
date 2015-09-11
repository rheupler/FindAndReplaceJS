var findAndReplace = function(string, oldWord, newWord) {
  if (string.length === 0) {
    return "Please enter a sentence.";
  } else if (string.search(oldWord > 0)) {
    return string.replace(oldWord, newWord);
  } else {
    return "Your word was not found.";
  }
};



$(function() {
  $("form#findReplace").submit(function(event) {
    var sentence = $("input#string").val();
    var oldWord = $("input#oldWord").val();
    var result = findAndReplace(sentence);

    $("#result").text(result);
    $(".newSentence").show()
    $("#string").hide();
    $("#oldWord").show();
    $("#newWord").show();
    event.preventDefault();
  });
  $("form#findReplace").submit(function(event) {
    var sentence = $("input#string").val();
    var oldWord = $("input#oldWord").val();
    var newWord = $("input#newWord").val();
    var result = findAndReplace(sentence, oldWord, newWord);

    $("#result").text(result);
  });
});
