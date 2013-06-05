$(function() {

  var images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
  var random = images[Math.floor(Math.random() * images.length)];
  $('html').css({'background-image': 'url(../img/' + random + ')'});
  
  if ( random === 'bg1.jpg' ) {
    $('.content h1').css({'color': 'black'});
    $('.content h2').css({'color': 'black'});
    $('.content .hero ul').css({'border-top': '1px dashed black'});
    $('.content ul li a').css({'color': 'black'});
  }
  
  $('.lbox').hide();
  $('#overlay').hide();
  
  $('#info').click(function() {
    $('.info').show();
    $('#overlay').show();
  });
  
  $('#video').click(function() {
    $('.video').show();
    $('#overlay').show();
  });
  
  $('#contact').click(function() {
    $('.contact').show();
    $('#overlay').show();
  });
  
  $('#overlay, .close').click(function() {
    $('#overlay').hide();
    $('.lbox').hide();
  });
  
  $('.content').fitVids();
  
});