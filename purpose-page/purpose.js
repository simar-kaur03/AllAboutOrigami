

var images = ['img/purpose1.png', 'img/purpose2.png', 'img/purpose3.png'];
var index = 0;

function changeImage() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  var image = document.getElementById('image');
  image.src = images[index];
}

