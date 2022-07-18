function CreateABC(prev, next) {
  var p, n, pos, str;
  for (pos = 0; p === n; pos++) {
    p = pos < prev.length ? prev.charCodeAt(pos) : 96;
    n = pos < next.length ? next.charCodeAt(pos) : 123;
  }
  str = prev.slice(0, pos - 1);
  if (p === 96) {
    while (n === 97) {
      n = pos < next.length ? next.charCodeAt(pos++) : 123;
      str += "a";
    }
    if (n === 98) {
      str += "a";
      n = 123;
    }
  } else if (p + 1 === n) {
    str += String.fromCharCode(p);
    n = 123;
    while ((p = pos < prev.length ? prev.charCodeAt(pos++) : 96) === 123) {
      str += "z";
    }
  }
  return str + String.fromCharCode(Math.ceil((p + n) / 2));
}
var strings = ["a", "c"];
while (strings.length < 20) {
  var rnd = Math.floor(Math.random() * (strings.length - 1));
  strings.splice(rnd + 1, 0, midString(strings[rnd], strings[rnd + 1]));
  console.log(strings);
}
export default CreateABC;
