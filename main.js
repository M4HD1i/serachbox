
//01

var searchBox0 = document.getElementById('searchBox0');



var timeout01;
searchBox0.addEventListener('input', function(event) {
  clearTimeout(timeout01);
  timeout01 = setTimeout(function() {
    console.log("typed: " + event.target.value);
  }, 1000);
});





////02

var searchBox1 = document.getElementById('searchBox1');
var timeout02;



var interval = setInterval(function() {
  console.log("Harchi ta alan type shode: " + searchBox1.value);
}, 1000);

searchBox1.addEventListener('input', function() {

  clearTimeout(timeout02);
    timeout02 = setTimeout(function() {
    clearInterval(interval);
    console.log("Event stopped after 6 seconds of inactivity");
  }, 6000);
});
