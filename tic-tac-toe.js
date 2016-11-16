// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

function createCircle() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 100)
  circle.setAttribute("cy", 50)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill","blue")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
