
var NowMoment = moment();
var fecha = moment('2022-04-28');
var eDisplayMoment = document.getElementById('fechadif');
eDisplayMoment.innerHTML =fecha.diff(NowMoment,'days')+(' dias restantes');

var fecha2 = moment('2022-05-13');
var eDisplayMoment = document.getElementById('fechadif2');
eDisplayMoment.innerHTML =fecha2.diff(NowMoment,'days')+(' dias restantes');

var fecha3 = moment('2022-06-23');
var eDisplayMoment = document.getElementById('fechadif3');
eDisplayMoment.innerHTML =fecha3.diff(NowMoment,'days')+(' dias restantes');

var fecha4 = moment('2022-09-06');
var eDisplayMoment = document.getElementById('fechadif4');
eDisplayMoment.innerHTML =fecha4.diff(NowMoment,'days')+(' dias restantes');

var eDisplayMoment = document.getElementById('fechahoy');
eDisplayMoment.innerHTML = NowMoment.format('DD/MM/YYYY');

