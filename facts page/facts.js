

var images = ['img/fact_1.png', 'img/fact_2.png', 'img/fact_3.png', 'img/fact_4.png', 'img/fact_5.png', 'img/fact_6.png'];
var index = 0;

function changeImage() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  var image = document.getElementById('image');
  image.src = images[index];
}



