


var images = ['img/history1.png', 'img/history2.png', 'img/history3.png', 'img/history4.png'];
var index = 0;

function changeImage() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  var image = document.getElementById('image');
  image.src = images[index];
}

