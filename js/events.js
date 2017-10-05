function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on("click", function() {
    alert();
    $('img').addClass("tasty")
  })
}

$(document).ready(function(){

  getIt()
  frameIt()

});
