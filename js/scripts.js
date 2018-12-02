function myTriangle() {
  var triangle = [];

  triangle.push(parseFloat(document.getElementById("sideA").value));
  if (isNaN(triangle[0]) === true || triangle[0] <= 0) {
    alert("Please enter valid dimensions.");
  } else {
    triangle.push(parseFloat(document.getElementById("sideB").value));
    if (isNaN(triangle[1]) === true || triangle[1] <= 0) {
      alert("Please enter valid dimensions.");
    } else {
      triangle.push(parseFloat(document.getElementById("sideC").value));
      if (isNaN(triangle[2]) === true || triangle[2] <= 0) {
        alert("Please enter valid dimensions.");
      } else {
        if ((triangle[0] + triangle[1]) <= triangle[2] || (triangle[1] + triangle[2]) <= triangle[0] || (triangle[0] + triangle[2]) <= triangle[1]) {
          alert("These measurements cannot form a triangle.");
        } else if (triangle[0] === triangle[1] && triangle[1] === triangle[2]) {
          alert("These measurements form an equilateral triangle.");
        } else if (triangle[0] === triangle[1] || triangle[1] === triangle[2] || triangle[0] === triangle[2]) {
          alert("These measurements form an isosceles Triangle.");
        } else {
          alert("These measurements form a scalene Triangle.");
        }
      }
    }
  }
}
