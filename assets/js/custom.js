$(function() {
  $('#start-time').timepicki();
  $('#lunch-time').timepicki();
  $('#lunch-return').timepicki();
  $('#exit-time').timepicki();
  $('[data-toggle="tooltip"]').tooltip();
})

$('#btn-edit').click(function() {
  $('#start-time').timepicki();
});

