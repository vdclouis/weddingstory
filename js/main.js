$(function() {

  var images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
  var random = images[Math.floor(Math.random() * images.length)];
  $('html').css({'background-image': 'url(../img/' + random + ')'});
  
  if ( random === 'bg1.jpg' ) {
    $('.content').css({'color': 'black'});
    $('.content ul').css({'border-top': '1px dashed black'});
  }
  
});