if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

;(function(){
"undefined" !== typeof Math.imul && (Math.imul.a ? Math.imul.a(4294967295, 5) : Math.imul.call(null, 4294967295, 5));
function a() {
  var b = document.getElementById("clock"), b = function(b, g) {
    return function() {
      return b.innerHTML = g;
    };
  }(b, function() {
    return function() {
      return moment().format("h::mm:ss a");
    };
  }(b));
  b();
  return setInterval(b, 1E3);
}
var c = ["clock", "core", "start_clock"], d = this;
c[0] in d || !d.execScript || d.execScript("var " + c[0]);
for (var e;c.length && (e = c.shift());) {
  var f;
  if (f = !c.length) {
    f = void 0 !== a;
  }
  f ? d[e] = a : d = d[e] ? d[e] : d[e] = {};
}
;
})();
