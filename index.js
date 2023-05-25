window.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderTrack = document.querySelector('.slider-track');
    const image = document.querySelector('.image');
    
    let isDragging = false;
    
    sliderTrack.addEventListener('mousedown', function() {
      isDragging = true;
    });
    
    window.addEventListener('mousemove', function(event) {
      if (isDragging) {
        const prevPos = event.clientX - sliderContainer.offsetLeft;
        
        sliderTrack.style.width = prevPos + 'px';
        
        if (prevPos === 0) {
          image.classList.remove('active');
        } else {
          image.classList.add('active');
        }
      }
    });
    
    window.addEventListener('mouseup', function() {
      isDragging = false;
    });
    
    image.classList.add('active');
  });
  

  //carousal

  function expandElement(element) {
    var container = document.querySelector('.container');

    if (element.classList.contains('expanded')) {
        container.classList.remove('expanded');
        element.classList.remove('expanded');
        element.classList.add('collapsed');
    } else {
        container.classList.add('expanded');

        var otherElements = document.querySelectorAll('.image1, .div1, .div2');
        for (var i = 0; i < otherElements.length; i++) {
            if (otherElements[i] !== element) {
                otherElements[i].classList.add('collapsed');
                otherElements[i].classList.remove('expanded');
            }
        }

        element.classList.add('expanded');
        element.classList.remove('collapsed');
    }
}

  
//   function changeVideoSource() {
//     var video = document.getElementById("video");
//     var isMobile = window.matchMedia("(max-width: 768px)").matches;

//     if (isMobile) {
//         video.src = "https://specscart.co.uk/media/wysiwyg/homeimage/specscart-home-trial-mob.mp4";
//     }
// }

// changeVideoSource();

// window.addEventListener("resize", changeVideoSource);