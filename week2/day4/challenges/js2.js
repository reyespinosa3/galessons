console.log("Sanity Check: JS is working!");

var rockAndRoll = "<iframe width='560' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"

$(document).ready(function(){

  $("#time").text( Date.now(event) );
  event.preventDefault;
  $("form").on("submit", function handleSubmit(event){
     event.preventDefault();
     $("body").append(rockAndRoll);
   })

})
