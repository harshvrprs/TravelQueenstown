var imag = new Array();
imag[0] = "images/image1.jpg";
imag[1] = "images/image2.jpg";
imag[2] = "images/image3.jpg";
imag[3] = "images/image4.jpg";
imag[4] = "images/image5.jpg";
imag[5] = "images/image6.jpg";
imag[6] = "images/image7.jpg";
imag[7] = "images/image8.jpg";
imag[8] = "images/image9.jpg";
function imagePreview(x){
  document.getElementById('img').src = imag[x];
}
