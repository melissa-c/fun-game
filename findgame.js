$(document).ready(function(){

/*  clear class settings.
  hide yes message to prevent positions from changing.
  make no message invisible.
*/
  var start = function(){
    $("td").removeClass("found");
    $("td").removeClass("wrong");
    $(".noPanda").show().css("color", "transparent");
    $(".yesPanda").hide();
  };
  start();

/*  when a cell is clicked it changes to 1 of 2 states:
  1. "wrong": briefly shows the no message, briefly
  change cell to red.
  2. "found": permanently shows yes message, permanently
  changes cell to yellow, stops click events from executing
  in the table.
  "found" state is executed when a specific predetermined 
  cell is clicked.
  All other cells have default "wrong" state.
*/

$("td").click(function(){
  $(".noPanda").css("color", "red").delay(400).queue(function(){
    $(".noPanda").css("color", "transparent").dequeue();
  });
  $(this).addClass("wrong").delay(400).queue(function(){
    $(this).removeClass("wrong").dequeue();
  });
});

$("#snow").click(function(){
  $(this).removeClass("wrong");
  $(this).addClass("found");
  $(".yesPanda").show().css("color", "green");
  $(".noPanda").hide();
  $("#main").click(function(){
    $("td").off();
  });
});









});