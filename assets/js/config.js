$('#password').keypress(function (e) {
  var regex = new RegExp("^[a-zA-Z0-9]+$");
  var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
<<<<<<< HEAD:assets/js/config.js
  if (regex.test(str)) {
      return true;
  }  
=======
>>>>>>> 558453cb2d70ad624898ed95be6179d5365bc949:assets/js/custom.js
});

var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();
var year = d.getFullYear();

var Month = new Array(12);
Month[0] = "Janeiro";
Month[1] = "Fevereiro";
Month[2] = "Março";
Month[3] = "Abril";
Month[4] = "Maio";
Month[5] = "Junho";
Month[6] = "Julho";
Month[7] = "Agosto";
Month[8] = "Setembro";
Month[9] = "Outubro";
Month[10] = "Novembro";
Month[11] = "Dezembro";

var MonthName = Month[d.getMonth()];

var today = d.getDate() +" de "+ MonthName;
var todayComplete = day +" de "+ MonthName +" de "+ year;

var t=d.toLocaleTimeString();

var weekday = new Array(7);
weekday[0] = "Domingo";
weekday[1] = "Segunda";
weekday[2] = "Terça";
weekday[3] = "Quarta";
weekday[4] = "Quinta";
weekday[5] = "Sexta";
weekday[6] = "Sábado";

var weekdayinfo = weekday[d.getDay()];

function currentWeekday() {
  var print = document.getElementsByClassName("current-weekday");
  var inspect;
  for (inspect = 0; inspect < print.length; inspect++) {
      print[inspect].innerHTML = weekdayinfo;
  }
}

function currentDayMonth() {
  var print = document.getElementsByClassName("current-day-month");
  var inspect;
  for (inspect = 0; inspect < print.length; inspect++) {
      print[inspect].innerHTML = today;
  }
}

function currentDayMonthYear() {
  var print = document.getElementsByClassName("current-day-month-year");
  var inspect;
  for (inspect = 0; inspect < print.length; inspect++) {
      print[inspect].innerHTML = todayComplete;
  }
}

function currentMonth() {
  var print = document.getElementsByClassName("current-month");
  var inspect;
  for (inspect = 0; inspect < print.length; inspect++) {
      print[inspect].innerHTML = MonthName;
  }
}

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

currentWeekday();
currentDayMonth();
currentDayMonthYear();
currentMonth();

var rows = [{
    workday: "1 - Quinta",
    start:  "09:15",
    lunch:  "12:15",
    return: "13:22",
    end:    "18:20",
    balance:"-0:02"
}, {
    workday: "2 - Sexta",
    start:  "09:15",
    lunch:  "12:15",
    return: "13:22",
    end:    "18:20",
    balance:"-0:02"
}, {
    workday: "5 - Segunda",
    start:  "09:15",
    lunch:  "12:15",
    return: "13:22",
    end:    "18:20",
    balance:"-0:02"
}];

var html = "<tr class=\"clickable-row\" data-href=\"day.html\">";
for (var i = 0; i < rows.length; i++) {
  html+="<td>"+rows[i].workday+"</td>";
  html+="<td>"+rows[i].start+"</td>";
  html+="<td>"+rows[i].lunch+"</td>";
  html+="<td>"+rows[i].return+"</td>";
  html+="<td>"+rows[i].end+"</td>";
  html+="<td class=\"align-right\"><div class=\"text-success\">"+rows[i].balance+"</div></td>";
  html+="</tr>";
  }
    
document.getElementById("monthTable").innerHTML = html;
