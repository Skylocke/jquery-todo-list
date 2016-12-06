$(document).ready(function(){
  console.log("DOM is ready.");
});

$("#add-text").click(function(){
  // add input to list
  var entry = $("#text-input");
  var del_button = "<button class=\"cross-off\">✓</button>"
  $("#to-do").append("<div class=\"list-item\">" + del_button + " " + entry.val() + "</div>"); // beware of user HTML injection
  $(".cross-off").click(did_the_thing);
  entry.val("");
});

function did_the_thing() {
  $(this).closest('div').remove();
}
