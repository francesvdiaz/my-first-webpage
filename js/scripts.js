window.onload = function(event) {
  event.preventDefault;
  let funkybutton = document.getElementById("funky");
  let prettybutton = document.getElementById("pretty");
  element = document.body;
  
  funkybutton.addEventListener("click", function() {
    element.style.backgroundColor = "purple";
    element.style.color = "green";
  })

  prettybutton.addEventListener("click", function() {
    element.style.backgroundColor = "grey";
    element.style.backgroundColor = "blue";
  })
}