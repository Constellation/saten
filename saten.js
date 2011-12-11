(function(exp) {

var stack = [];

var generate = (function() {
  if (typeof Uint8Array === 'undefined') {
    return function generate(array) {
      // use String instead of Uint8Array
      for (var i = 0, len = array.length; i < len; ++i) {
        array[i] = String.fromCharCode(array[i]);
      }
      return array.join('');
    }
  } else {
    return function generate(array) {
      return new Uint8Array(array);
    }
  }
})();

function compile(pattern, flags) {
  var result = [];
  return generate(result);
}

function exec(compiled, str) {
  for (var i = 0, len = compiled.length; i < len; ++i) {
    // jump table
    switch (compiled[i]) {
    }
    // backtrack path
  }
  return false;
}

function Saten(pattern, flags) {
  this.compiled = compile(pattern, flags);
}

Saten.prototype.exec = function SatenExec(str) {
  return exec(this.compiled, str);
}

exp.Saten = Saten;

})(this);
