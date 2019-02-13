document.getElementById("btn").addEventListener("click", myFunction);

function myFunction() {
  var first_side = parseInt(document.getElementById("first").value);
  var second_side = document.getElementById("second").value;
  var third_side = document.getElementById("third").value;
  alert(typeof(first_side));
}
