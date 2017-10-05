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
    if(k.key == 'G') {
      alert("G")
    }
  })
}

$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()

});
