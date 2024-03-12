var Calculator = {
    result: 0,
    add: function(num) {
      this.result += num;
      return this;},
    subtract: function(num) {
      this.result -= num;
      return this; },
    multiply: function(num) {
      this.result *= num;
      return this; },
    divide: function(num) {
      if (num !== 0) {
        this.result /= num;
      } else {
        console.error("Cannot divide by zero!");}
      return this; },
    getResult: function() {
      return this.result;},
    clear: function() {
      this.result = 0;
      return this;}
  };
  var result = Calculator.add(10).multiply(3).subtract(2).divide(7).getResult();
  console.log("Result:", result);
  