function myTriangle() {
  var sideA = parseInt(prompt("Enter side \"A\" of the triangle"));
  var sideB = parseInt(prompt("Enter side \"B\" of the triangle"));
  var sideC = parseInt(prompt("Enter side \"C\" of the triangle"));

  if (sideA === sideB && sideB === sideC) {
    alert("These measurements form an equilateral triangle.");
  }

  else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    alert("These measurements form an isosceles Triangle");
  }

  else if (sideA +sideB > sideC || sideB + sideC >= sideA || sideA + sideC <= sideB) {
    alert("These measurements form a scalene Triangle");
  }

  else {
    alert("These measurements cannot form a triangle at all");
  }
}
alert(myTriangle());
