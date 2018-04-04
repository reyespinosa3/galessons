console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("span").on("click", function handleClick(event){
    var clicked = $(this).text() + " at " + Date.now();
    $("ul").append("<li>" + clicked + "</li>")
  })

})

// "You Clicked: " +  + " at " + Date.now()
