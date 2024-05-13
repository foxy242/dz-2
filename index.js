import debounce from 'lodash/debounce';

const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');

function handleSliderChange() {
    const value = sliderInput.value;
    sliderImage.style.width = `${value}%`;
}

const debouncedHandleSliderChange = debounce(handleSliderChange, 250);

sliderInput.addEventListener('input', debouncedHandleSliderChange);