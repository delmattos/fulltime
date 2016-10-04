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
