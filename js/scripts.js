document.getElementById("btn").addEventListener("click", getTriangle);

function getTriangle() {
  var first_side = parseInt(document.getElementById("first").value);
  var second_side = parseInt(document.getElementById("second").value);
  var third_side = parseInt(document.getElementById("third").value);
  console.log(first_side + second_side);
  if (((first_side + second_side) <= third_side )||
  ((second_side + third_side) <= first_side) ||
((first_side + third_side) <= second_side))  {
    result.innerHTML = ("It is not a  Triangle");
  } else if (first_side === second_side && second_side === third_side){
    result.innerHTML = ("It is an Equilateral Triangle");

  } else if (first_side === second_side || second_side === third_side || first_side === third_side){
    result.innerHTML = ("It is an Isosceles Triangle");
  } else {
    result.innerHTML = ("It is a scarlene Triangle");
  }
document.getElementById("form_class").reset();
}
