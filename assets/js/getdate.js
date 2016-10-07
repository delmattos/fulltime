var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();
var year = d.getFullYear();

var Month=new Array(12);
Month[0]="Janeiro";
Month[1]="Fevereiro";
Month[2]="Março";
Month[3]="Abril";
Month[4]="Maio";
Month[5]="Junho";
Month[6]="Julho";
Month[7]="Agosto";
Month[8]="Setembro";
Month[9]="Outubro";
Month[10]="Novembro";
Month[11]="Dezembro";

var MonthName = Month[d.getMonth()]; 

var today = day +" de "+MonthName+" de "+year; 

var t=d.toLocaleTimeString();

var weekday=new Array(7);
weekday[0]="Domingo";
weekday[1]="Segunda";
weekday[2]="Terça";
weekday[3]="Quarta";
weekday[4]="Quinta";
weekday[5]="Sexta";
weekday[6]="Sábado";

var weekdayinfo = weekday[d.getDay()]; 

document.getElementById('weekday').innerHTML = weekdayinfo;

document.getElementById('date').innerHTML = today;