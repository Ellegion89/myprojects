//NO UI SLIDER---------------------------------------------------------------------------------//
const priceSlider = document.getElementById('price-slider');

noUiSlider.create(priceSlider, {
    start: [5, 300],
    connect: true,
    step: 1,
    tooltips: [true, true],
    range: {
        'min': 5,
        'max': 300
    },
    format: {
        from: function (value) {
            return parseInt(value);
        },
        to: function (value) {
            return parseInt(value);
        }
    }
});


const priceBox = document.querySelector('.price-slider');
const inputMin = document.querySelector('.catalogue-page-filter__input-min');
const inputMax = document.querySelector('.catalogue-page-filter__input-max');


priceBox.addEventListener("click", function (e) {
    let noUiLower = document.querySelector('.noUi-handle-lower').getAttribute('aria-valuetext');
    let noUiUpper = document.querySelector('.noUi-handle-upper').getAttribute('aria-valuetext');
    inputMin.setAttribute('value', noUiLower);
    inputMax.setAttribute('value', noUiUpper);
});

inputMin.addEventListener('change', function () {
    priceSlider.noUiSlider.set([inputMin.value, inputMax.value]);
    inputMin.setAttribute('value', inputMin.value);
});

inputMax.addEventListener('change', function () {
    priceSlider.noUiSlider.set([inputMin.value, inputMax.value]);
    inputMax.setAttribute('value', inputMax.value);

});




