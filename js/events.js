function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('p').on("load", function() {
    alert("Hey!")
  })
}

$(document).ready(function(){

  getIt()

});
