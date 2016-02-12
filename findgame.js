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

  $("button").click(function(){
    function reset(){
      location.reload();
    };
    reset();
  });
});

/*  --------- half-baked code for game upgrades ------------

  Different puzzles:

  var puzzles = [
    {
      puzzle: "img/snowmanpanda.jpg",
      theme: "snow figures"
      //answer row3 cell6 (using 0 index)
    },
    {
      puzzle: "img/starwarspanda.jpg",
      theme: "star wars characters"
      //answer row1 cell6 (using 0 index)
    },
    {
      puzzle: "img/racoonpanda.jpg",
      theme: "raccoons"
      //answer row5 cell1 (using 0 index)
    }
  ];

  button for new game set up:

  $("button").click(function(){
    function newGame(){
      var result = puzzles[Math.floor(Math.random() * puzzles.length)];
    }
    newGame();
  });
  */


/*------things that didn't work for cell index instead of id -------

var answer = $("#main.rows(3).cells(6)");
var answer = $("table.row(3).index(6)");
var answer = $("table tr:nth-child(3) td:nth-child(6)");

var rowIndex = 3;
var cellIndex = 6;
var answer = document.getElementById("main").rows[rowIndex].cells[cellIndex];
var answer = $("tr:nth-child(rowIndex)").index("td:nth-child(cellIndex)");

var table = $("#main")[0];
var answer = table.rows[3].cells[6];
*/