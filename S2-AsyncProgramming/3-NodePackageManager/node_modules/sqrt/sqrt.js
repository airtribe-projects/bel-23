(function(root) {
  'use strict';

  function sqrt(n) {
    if (!(typeof n === 'number' && n >= 0 && !isNaN(n))) {
      return NaN;
    } else if (n === 0) {
      return 0;
    } else if (n === Infinity) {
      return Infinity;
    }

    var val = n;

    while(true) {
      var last = val;
      val = (val + n / val) * 0.5;
      if (Math.abs(val - last) < 1e-9) {
        break;
      }
    }

    return val;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = sqrt;
    }
    exports.sqrt = sqrt;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return sqrt;
    });
  } else {
    root.sqrt = sqrt;
  }

})(this);
