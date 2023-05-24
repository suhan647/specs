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
  

//   function changeVideoSource() {
//     var video = document.getElementById("video");
//     var isMobile = window.matchMedia("(max-width: 768px)").matches;

//     if (isMobile) {
//         video.src = "https://specscart.co.uk/media/wysiwyg/homeimage/specscart-home-trial-mob.mp4";
//     }
// }

// changeVideoSource();

// window.addEventListener("resize", changeVideoSource);