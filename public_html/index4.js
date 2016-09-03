var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;

function updateCode() {
  
  eval(textarea.value);
}

reset.addEventListener("click", function() {
  textarea.value = code;
  updateCode();
});

solution.addEventListener("click", function() {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution = 'var list = document.querySelector(\'.output ul\');\nlist.innerHTML = \'\';\nvar cities = [\'lonDon\', \'ManCHESTer\', \'BiRmiNGHAM\', \'liVERpoOL\'];\n\nfor(var i = 0; i < cities.length; i++) {\n  var input = cities[i];\n  var lower = input.toLowerCase();\n  var firstLetter = lower.slice(0,1);\n  var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());\n  var result = capitalized;\n  var listItem = document.createElement(\'li\');\n  listItem.textContent = result;\n  list.appendChild(listItem);\n\n}';

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
