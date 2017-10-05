function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass("tasty")
  })
}

function pressIt() {
  $('#typing').on("keydown", function(k) {
    console.log(key)
  })
}

$(document).ready(function(){

  getIt()
  frameIt()

});
