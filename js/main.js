document.querySelector('#burger').onclick = function() {
    document.querySelector('.burger__but').classList.toggle('burger__active');
};
$(document).ready(function() {
    $('#burger').click(function(event) {
        $('.section__header__dropdowburger').toggleClass('burger__activation');
    });
});
new Splide('.splide', {
    type: 'loop',
    autoWidth: true,
    focus: 'center',
}).mount();


var endTime = new Date(2021, 0, 10).getTime() / 1000;

function setClock() {
    var elapsed = new Date().getTime() / 1000;
    var totalSec = endTime - elapsed;
    var d = parseInt(totalSec / 86400);
    var h = parseInt(totalSec / 3600) % 24;
    var m = parseInt(totalSec / 60) % 60;
    var s = parseInt(totalSec % 60, 10);

    $('.days').text(d);
    $('.hours').text(h);
    $('.minutes').text(m);
    $('.seconds').text(s);
    setTimeout(setClock, 1000);
}
setClock();