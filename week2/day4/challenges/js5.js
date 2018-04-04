console.log("Sanity Check: JS is working!");

var start; // undefined
var end; // undefined
var total; // undefined

$(document).ready(function(){

  $(window).on("keypress", function handleKeypress(event){

    if ( start ) {
      end = Date.now();
      total = (end - start) / 1000;
      $("#total-time").text( total + " seconds" )
    } else {
      start = Date.now();
    }

  })

})
