 $(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'alertmicrosoft.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
   
    
    $('#map').click(function() {
        audioElement.play();
        
    });
    
    
});
$(document).ready(function() {
    $(".arow-div").delay(1000).fadeIn(500);
});

    $(document).ready(function(){
  $(".delayedPopupWindow").click(function(){
    $('.delayedPopupWindow').hide('fast');
  });
});
   $(document).ready(function(){
  $(".black").click(function(){
    $('.delayedPopupWindow').hide('fast');
  });
});

   $(document).ready(function(){
  $("#win1").click(function(){
    $('.delayedPopupWindow').hide('fast');
  });
});
 $(document).ready(function(){
  $("#win2").click(function(){
    $('.delayedPopupWindow').hide('fast');
  });
});
  $(document).ready(function(){
  $("alert_popup").click(function(){
    $('.delayedPopupWindow').hide('fast');
  });
});
$(document).ready(function() {
    $(".delayedPopupWindow").delay(1500).fadeIn(500);
});
 $(document).ready(function() {
    $(".alert_popup").delay(1000).fadeIn(500);
});
  $(document).ready(function() {
    $("#chat-box").delay(2000).fadeIn(100);
});


