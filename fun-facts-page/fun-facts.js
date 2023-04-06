

var images = ['img/funfacts1.png', 'img/funfacts2.png', 'img/funfacts3.png', 'img/funfacts4.png', 'img/funfacts5.png'];
var index = 0;

function changeImage() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  var image = document.getElementById('image');
  image.src = images[index];
}

