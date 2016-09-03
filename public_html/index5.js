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

var jsSolution = 'var list = document.querySelector(\'.output ul\');\nlist.innerHTML = \'\';\nvar stations = [\'MAN675847583748sjt567654;Manchester Piccadilly\',\n                \'GNF576746573fhdg4737dh4;Greenfield\',\n                \'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street\',\n                \'SYB4f65hf75f736463;Stalybridge\',\n                \'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield\'];\n\nfor(var i = 0; i < stations.length; i++) {\n  var input = stations[i];\n  var code = input.slice(0,3);\n  var semiC = input.indexOf(\';\');\n  var name = input.slice(semiC + 1);\n  var final = code + \': \' + name;\n  var result = final;\n var listItem = document.createElement(\'li\');\n  listItem.textContent = result;\n  list.appendChild(listItem);\n}';


textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
