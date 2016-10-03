$(function() {
  $('#start-time').timepicki();
  $('#lunch-time').timepicki();
  $('#lunch-return').timepicki();
  $('#exit-time').timepicki();
  $('[data-toggle="tooltip"]').tooltip();
});

$(function () {
  $('#login-form').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
  })
  .on('form:submit', function() {
    return true;
  });
});
