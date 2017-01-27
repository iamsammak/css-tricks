// with jQuery
// $('span').text($(window).width());
//
// $(window).on('resize', function(e) {
//   $('span').text($(window).width());
// });

// but alas I has no internet
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('width').innerHTML = window.innerWidth;
  document.getElementById('height').innerHTML = window.innerHeight;

  console.log(document.getElementById('test').innerHTML);

  window.addEventListener('resize', e => {
    document.getElementById('width').innerHTML = window.innerWidth;
    document.getElementById('height').innerHTML = window.innerHeight;
    console.log("updated");
  });
});
