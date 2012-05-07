
$(document).ready(function(){

  $('#change-apples').click(function(event){
    event.preventDefault();
    var isGrannySmith = confirm('Do you want all the apples to be Granny Smith apples');
    if (isGrannySmith) {
      $('.apple').addClass('apple-granny-smith');
    }
    else {
      // Do nothing
    }
  });


});
