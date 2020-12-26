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