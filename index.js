// get modal
var modal1 = document.getElementById("mod1");
var modal2 = document.getElementById("mod2");
var modal3 = document.getElementById("mod3");
var modal4 = document.getElementById("mod4");

// get button that opens modal
var btn1 = document.getElementById("mod1_btn");
var btn2 = document.getElementById("mod2_btn");
var btn3 = document.getElementById("mod3_btn");
var btn4 = document.getElementById("mod4_btn");

// get span that closes modal
var span1 = document.getElementsByClassName("modal_close")[0];
var span2 = document.getElementsByClassName("modal_close")[1];
var span3 = document.getElementsByClassName("modal_close")[2];
var span4 = document.getElementsByClassName("modal_close")[3];

// show modal on click of button
btn1.onclick = function () {
  modal1.style.display = "block";
};
btn2.onclick = function () {
  modal2.style.display = "block";
};
btn3.onclick = function () {
  modal3.style.display = "block";
};
btn4.onclick = function () {
  modal4.style.display = "block";
};

// hide modal on click of span (x)
span1.onclick = function () {
  modal1.style.display = "none";
};
span2.onclick = function () {
  modal2.style.display = "none";
};
span3.onclick = function () {
  modal3.style.display = "none";
};
span4.onclick = function () {
  modal4.style.display = "none";
};

// hide modal when user clicks outside modal
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
};
