// memoization
// Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

function memoizeFunction(func) {
  var cache = {};
  return function() {
      var key = arguments[0];
      if(cache[key]) {
        return cache[key];
      }
      else {
        var val = func.apply(this, arguments);
        cache[key] = val;
        return val;
      }
  };
}

var fibonacci = memoizeFunction(function(n) {
  return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
});