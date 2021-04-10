var firstCard = $('.first-card');
var stillsSlider = $('.production-stills-slider');

var thirdCard = $('.third-card');
var castCrewSlider = $('.cast-crew-slider');

firstCard.on('click', function() {
    stillsSlider.toggleClass('d-none animate__animated animate__fadeInDown');
    castCrewSlider.addClass('d-none')
})


thirdCard.on('click', function () {
    castCrewSlider.toggleClass('d-none animate__animated animate__fadeInDown');
    stillsSlider.addClass('d-none')
})

