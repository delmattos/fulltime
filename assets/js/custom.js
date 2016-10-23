$('#password').keypress(function (e) {
  var regex = new RegExp("^[a-zA-Z0-9]+$");
  var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (regex.test(str)) {
      return true;
  }
  e.preventDefault();
  return false;
});

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('.hourpicker').timepicki({
  });
});

$(document).ready(function() {
  $(".clickable-row").on('click', function() {
    window.document.location = $(this).data("href");
  });

  $('#edit-start').attr('disabled', $('#start-time').val() === '');
  $('#edit-lunch').attr('disabled', $('#lunch-time').val() === '');
  $('#edit-return').attr('disabled', $('#lunch-return').val() === '');
  $('#edit-exit').attr('disabled', $('#exit-time').val() === '');

  $('#delete-start').attr('disabled', $('#start-time').val() === '');
  $('#delete-lunch').attr('disabled', $('#lunch-time').val() === '');
  $('#delete-return').attr('disabled', $('#lunch-return').val() === '');
  $('#delete-exit').attr('disabled', $('#exit-time').val() === '');

  $('#save-start').prop('disabled',true);
  $('#start-time').on('click', function(){
    $('#save-start').attr('disabled', false);
  })
  $('#save-lunch').prop('disabled',true);
  $('#lunch-time').on('click', function(){
    $('#save-lunch').attr('disabled', false);
  })
  $('#save-return').prop('disabled',true);
  $('#lunch-return').on('click', function(){
    $('#save-return').attr('disabled', false);
  })
  $('#save-exit').prop('disabled',true);
  $('#exit-time').on('click', function(){
    $('#save-exit').attr('disabled', false);
  })

  $('#delete-start').on('click', function() {
  $('#start-time').prop('disabled',false).val('');
  $('#delete-start').prop('disabled',true);
  $('#edit-start').prop('disabled',true);
  $('#save-start').attr('disabled', $('#start-time').val() === '');
  });

  $('#edit-start').on('click', function() {
    $('#start-time').prop('disabled',false);
    $('#edit-start').prop('disabled',true);
    $('#delete-start').prop('disabled',true);
    $('#save-start').attr('disabled', $('#start-time').val() === '');
  });

  $('#save-start').on('click', function() {
    $('#start-time').prop('disabled',true);
    $('#delete-start').prop('disabled',false);
    $('#edit-start').prop('disabled',false);
    $('#save-start').prop('disabled',true);
  });

  $('#delete-lunch').on('click', function() {
    $('#lunch-time').prop('disabled',false).val('');
    $('#edit-lunch').prop('disabled',true);
    $('#delete-lunch').prop('disabled',true);
    $('#save-lunch').attr('disabled', $('#lunch-time').val() === '');
  });

  $('#edit-lunch').on('click', function() {
    $('#lunch-time').prop('disabled',false);
    $('#edit-lunch').prop('disabled',true);
    $('#delete-lunch').prop('disabled',true);
    $('#save-lunch').attr('disabled', $('#lunch-time').val() === '');
  });

  $('#save-lunch').on('click', function() {
    $('#lunch-time').prop('disabled',true);
    $('#edit-lunch').prop('disabled',false);
    $('#delete-lunch').prop('disabled',false);
    $('#save-lunch').prop('disabled',true);
  });

  $('#delete-return').on('click', function() {
    $('#lunch-return').prop('disabled',false).val('');
    $('#edit-return').prop('disabled',true);
    $('#delete-return').prop('disabled',true);
    $('#save-return').attr('disabled', $('#lunch-return').val() === '');
  });

  $('#edit-return').on('click', function() {
    $('#lunch-return').prop('disabled',false);
    $('#edit-return').prop('disabled',true);
    $('#delete-return').prop('disabled',true);
    $('#save-return').attr('disabled', $('#lunch-return').val() === '');
  });

  $('#save-return').on('click', function() {
    $('#lunch-return').prop('disabled',true);
    $('#edit-return').prop('disabled',false);
    $('#delete-return').prop('disabled',false);
    $('#save-return').prop('disabled',true);
  });

  $('#delete-exit').on('click', function() {
    $('#exit-time').prop('disabled',false).val('');
    $('#edit-exit').prop('disabled',true);
    $('#delete-exit').prop('disabled',true);
    $('#save-exit').attr('disabled', $('#exit-time').val() === '');
  });

  $('#edit-exit').on('click', function() {
    $('#exit-time').prop('disabled',false);
    $('#edit-exit').prop('disabled',true);
    $('#delete-exit').prop('disabled',true);
    $('#save-exit').attr('disabled', $('#exit-time').val() === '');
  });

  $('#save-exit').on('click', function() {
    $('#exit-time').prop('disabled',true);
    $('#edit-exit').prop('disabled',false);
    $('#delete-exit').prop('disabled',false);
    $('#save-exit').prop('disabled',true);
  });
});