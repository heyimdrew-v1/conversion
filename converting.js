function alertHover(){
  
$(document).ready(function() {
  $("#area").hover(function() {
    $(this).css("background-color", "green");
    alert("Close me to turn the box green.");
  }, function() {
    $(this).css("background-color", "#953674");
  };
  });
});