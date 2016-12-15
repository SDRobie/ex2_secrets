
var myModule = (function() {
  'use strict';
  function shareSecret () {
    var obj = {
      secretPhrase: 'VERY SECRET MESSAGE'
    }
    var str = obj.secretPhrase.toUpperCase();
    console.log(str);
      cipherArray = [];
      for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
          cipherArray.push(str.charCodeAt(i));
        } else if (str.charCodeAt(i) > 77) {
          cipherArray.push(String.fromCharCode(str.charCodeAt(i) - 13));
        } else {
          cipherArray.push(String.fromCharCode(str.charCodeAt(i) + 13));
        }
      }
      console.log(cipherArray.join(''));
  }
}());
console.log(myModule);
