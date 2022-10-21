// clickable for keep the  user not distructed by social nav bar 
  window.console = window.console || function(t) {};

  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }

$(document).ready(function () {
  $('#so-open').click(function () {
    $('#so-open').css('left', '-60px');
    $('.s-soft').removeClass('so-collapse');
  });
$('#so-close').click(function () {
    $('.s-soft').addClass('so-collapse');
    $('#so-open').delay(300).css('left', '0');});}); 