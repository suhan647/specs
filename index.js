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
  var imgBtns = document.querySelector('.carousal_img_text .carousla-img-btn');
  var divBtns = document.querySelectorAll('.div1_btn, .div2_btn');

  // Hide buttons
  imgBtns.style.display = 'none';
  divBtns.forEach(function(btn) {
      btn.style.display = 'none';
  });

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

      // Show buttons
      if (element.classList.contains('image1')) {
          imgBtns.style.display = 'block';
      } else {
          var btnContainer = element.querySelector('.div1_btn, .div2_btn');
          btnContainer.style.display = 'block';
      }
  }
}

// Hide buttons on page load
window.addEventListener('DOMContentLoaded', function() {
  var imgBtns = document.querySelector('.carousal_img_text .carousla-img-btn');
  var divBtns = document.querySelectorAll('.div1_btn, .div2_btn');

  imgBtns.style.display = 'none';
  divBtns.forEach(function(btn) {
      btn.style.display = 'none';
  });
});
