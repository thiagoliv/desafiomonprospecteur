export function getRandomText(n) {
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';
    var random = '';
    for (var i = 0; i < n; i++) {
      var rnum = Math.floor(Math.random() * letters.length);
      random += letters.substring(rnum, rnum + 1);
    }
    return random;
  }