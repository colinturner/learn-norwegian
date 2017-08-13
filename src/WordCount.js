(function(exports) {

  function WordCount(string) {
    this.string = string;
    this.dict = {};
    this.keys = [];
  }

  WordCount.prototype.split = function() {
    return this.string = this.string.toLowerCase().split(/[^\w\u00C0-\u00ff]+/g)
  };

  WordCount.prototype.getData = function() {
    for (var i = 0; i < this.string.length; i++) {
      var word = this.string[i];
      if (!/\d+/.test(word)) {
        if (!this.dict[word]) {
          this.dict[word] = 1;
          this.keys.push(word);
        } else {
          this.dict[word] += 1;
        }
      }
    }
  };

  WordCount.prototype.sortArray = function() {
    var myDict = this.dict;
    var myKeys = this.keys;
    var compare = function(a,b) {
      return myDict[b] - myDict[a];
    };
    myKeys.sort(compare);
  };

  WordCount.prototype.displayDivs = function () {
    for (var i = 0; i < this.keys.length; i++) {
      var key = this.keys[i];
      var node = document.createElement("DIV");
      if (!this.isPrime(this.dict[key])) {
        var textnode = document.createTextNode('"' + key + '"' + " appears " + this.dict[key] + " times");
      } else {
        var textnode = document.createTextNode('"' + key + '"' + " appears " + this.dict[key] + " times. PRIME WORDCOUNT!");
      }
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
    }
  };

  WordCount.prototype.isPrime = function (num) {
    for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
    return num !== 1;
  };

  WordCount.prototype.format = function() {
    this.split();
    this.getData();
    this.sortArray();
    this.displayDivs();
  };

  exports.WordCount = WordCount;

})(this);
