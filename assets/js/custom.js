$(function() {
  $('#start-time').timepicki();
  $('#lunch-time').timepicki();
  $('#lunch-return').timepicki();
  $('#exit-time').timepicki();
  $('[data-toggle="tooltip"]').tooltip();
});

jQuery(document).ready(function($) {
  $(".clickable-row").click(function() {
    window.document.location = $(this).data("href");
  });
});

$('#password').keypress(function (e) {
  var regex = new RegExp("^[a-zA-Z0-9]+$");
  var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (regex.test(str)) {
      return true;
  }
  e.preventDefault();
  return false;
});
