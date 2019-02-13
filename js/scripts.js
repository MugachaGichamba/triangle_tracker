document.getElementById("btn").addEventListener("click", getTriangle);

function getTriangle() {
  var first_side = parseInt(document.getElementById("first").value);
  var second_side = parseInt(document.getElementById("second").value);
  var third_side = parseInt(document.getElementById("third").value);

  if ((first_side + second_side <= third_side) ||
  (second_side + third_side <= first_side) ||
  (first_side + third_side <= second_side)){
    alert("Not a triangle");
  }

}
