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












});