'use strict';

describe("WordCount", function() {
  var words;

  beforeEach(function() {
    words = new WordCount("This is a string; great, this, stuff");
  });

  describe("#split", function() {
    it("separates a string into an array of lowercase words", function() {
      expect(words.split()).toEqual(["this", "is", "a", "string", "great", "this", "stuff"]);
    });
  });

  describe("#getData", function() {
    it("creates dictionary with words and their counts", function() {
      words.split();
      words.getData();
      expect(words.dict).toEqual({"this": 2, "is": 1, "a": 1, "string": 1, "great": 1, "stuff": 1});
    });

    it("ignores numbers, only documents words", function() {
      var numbersAndWords = new WordCount("This is. quite. the 67 the inconvenient 89 String");
      numbersAndWords.split();
      numbersAndWords.getData();
      expect(numbersAndWords.dict).toEqual({"this": 1, "is": 1, "quite": 1, "the": 2, "inconvenient": 1, "string": 1})
    });

    it("creates an array with all words", function() {
      var manyWords = new WordCount("the The the the is is is a a tree");
      manyWords.split();
      manyWords.getData();
      expect(manyWords.keys).toEqual(["the", "is", "a", "tree"]);
    });
  });

  describe("#sortArray", function() {
    it("sorts the array by frequency of words", function(){
      var moreWords = new WordCount("the is is is is a a tree tree tree");
      moreWords.split();
      moreWords.getData();
      moreWords.sortArray();
      expect(moreWords.keys).toEqual(["is", "tree", "a", "the"]);
    });
  });

  describe("isPrime", function() {
    it("returns true if a number is prime; false otherwise", function() {
      var words = new WordCount("Here are words")
      expect(words.isPrime(13)).toEqual(true);
      expect(words.isPrime(23)).toEqual(true);
      expect(words.isPrime(15)).toEqual(false);
    });
  });



})
