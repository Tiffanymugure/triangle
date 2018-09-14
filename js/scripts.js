 function triangles() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var ans = document.getElementById("answer")
  if ((a !== b) && (a !== c) && (b !== c)) {
    alert ("scalene ");
    }
else if ((a === b) && (a === c)) {
  alert ("equilateral");
}
else if ((a == b) || (a ==c )) {
  alert ("isosceles");
}
else if ((a == b) || (b == c)) {
  alert("isosceles");
}
else if((b == c) || (a == c )) {
  alert("isosceles");
}
else{

}
}
