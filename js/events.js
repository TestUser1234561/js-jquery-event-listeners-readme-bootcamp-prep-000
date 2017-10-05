function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on("load", function() {
    alert("Hey!")
  })
}

$(document).ready(function(){

  getIt()

});
