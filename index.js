Array.prototype.forEachAsync = async function(cb) {
  for (let i = 0; i < this.length; i++) {
    let ele = this[i];
    await cb(ele, i);
  }
}

Array.prototype.mapAsync = async function(cb) {
  var result = [];
  for (let i = 0; i < this.length; i++) {
    let ele = this[i];
    let newEle = await cb(ele, i);
    result.push(newEle);
  }
  return result;
}

Array.prototype.filterAsync = async function(cb) {
  var result = [];
  for (let i = 0; i < this.length; i++) {
    let ele = this[i];
    let bool = await cb(ele, i);
    if (bool === true)
      result.push(ele);
  }
  return result;
}

Array.prototype.randChoice = function() {
  return this[Math.floor(Math.random() * this.length)];
}

Set.prototype.equals = function(s) {
  return this.size == s.size && [...s].every(e => this.has(e));
}

String.prototype.shuffle = function() {
  let a = this.split("");
  let n = a.length;
  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}

String.genRandAlphaNumeric = () => {
  const length = 4;
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() *
    chars.length)];
  return result;
}

String.prototype.isAlphaNumeric = function() {
  let code, i, len;
  for (i = 0, len = this.length; i < len; i++) {
    code = this.charCodeAt(i);
    if (!(code > 47 && code < 58) &&
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123)) {
      return false;
    }
  }
  return true;
}

Number.genEpochUnixTS = () => new Date().getTime() / 1000;

Array.prototype.shuffle = function() {
  let currentIndex = this.length;
  let temporaryValue, randomIndex;
  var array = this.slice();
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

module.exports.Array = Array;
module.exports.Set = Set;
module.exports.String = String;
module.exports.Number = Number;
