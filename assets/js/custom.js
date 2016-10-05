$(function() {


  $('#start-time').timepicki();
  $('#lunch-time').timepicki();
  $('#lunch-return').timepicki();
  $('#exit-time').timepicki({
    on_change: function(e){
      $('#save-exit').attr('disabled', $(e).val() === '');
    }
  });
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

$('#edit-start').on('click', function() {
  $('#start-time').prop('disabled',false);
  $('#edit-start').css('display','none');
  $('#delete-start').css('display','none');
  $('#save-start').css('display','inline-block');
  $('#save-start').attr('disabled', $('#start-time').val() === '');
});

$('#save-start').on('click', function() {
  $('#start-time').prop('disabled',true);
  $('#edit-start').css('display','inline-block');
  $('#delete-start').css('display','inline-block');
  $('#save-start').css('display','none');
});

$('#edit-lunch').on('click', function() {
  $('#lunch-time').prop('disabled',false);
  $('#edit-lunch').css('display','none');
  $('#delete-lunch').css('display','none');
  $('#save-lunch').css('display','inline-block');
  $('#save-lunch').attr('disabled', $('#lunch-time').val() === '');
});

$('#save-lunch').on('click', function() {
  $('#lunch-time').prop('disabled',true);
  $('#edit-lunch').css('display','inline-block');
  $('#delete-lunch').css('display','inline-block');
  $('#save-lunch').css('display','none');
});

$('#edit-return').on('click', function() {
  $('#lunch-return').prop('disabled',false);
  $('#edit-return').css('display','none');
  $('#delete-return').css('display','none');
  $('#save-return').css('display','inline-block');
  $('#save-return').attr('disabled', $('#lunch-return').val() === '');
});

$('#save-return').on('click', function() {
  $('#lunch-return').prop('disabled',true);
  $('#edit-return').css('display','inline-block');
  $('#delete-return').css('display','inline-block');
  $('#save-return').css('display','none');
});

$('#edit-exit').on('click', function() {
  $('#exit-time').prop('disabled',false);
  $('#edit-exit').css('display','none');
  $('#delete-exit').css('display','none');
  $('#save-exit').css('display','inline-block');
  $('#save-exit').attr('disabled', $('#exit-time').val() === '');
});

$('#save-exit').on('click', function() {
  $('#exit-time').prop('disabled',true);
  $('#edit-exit').css('display','inline-block');
  $('#delete-exit').css('display','inline-block');
  $('#save-exit').css('display','none');
});
