export function getRandomNumbersMinMax(n1, n2) {
    const min = Math.ceil(n1);
    const max = Math.floor(n2);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  export function getRandomNumbers(max) {
    return Math.floor(Math.random() * max + 1)
  }
  
  export function getRandomNumbersSize(n) {
    var numbers = '0123456789';
    var random = '';
    for (var i = 0; i < n; i++) {
      var rnum = Math.floor(Math.random() * numbers.length);
      random += numbers.substring(rnum, rnum + 1);
    }
    return random;
  }