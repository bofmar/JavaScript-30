function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e){
  sliderImages.forEach(sliderImage =>{
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2; //halfway through the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height; // the bottom of the image

    const isHalfShown = slideInAt > sliderImage.offsetTop; // half of the image is visible
    const isNotScrolledPast = window.scrollY < imageBottom; // image is not out of view

    if(isHalfShown && isNotScrolledPast){
      sliderImage.classList.add("active");
    }else{
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));