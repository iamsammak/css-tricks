// with jQuery
// $('span').text($(window).width());
//
// $(window).on('resize', function(e) {
//   $('span').text($(window).width());
// });

// but alas I has no internet
document.addEventListener('DOMContentLoaded', () => {
  const width = document.getElementById('width');
  const height = document.getElementById('height');
  width.innerHTML = window.innerWidth;
  height.innerHTML = window.innerHeight;

  console.log(`Starting Width ${document.getElementById('width').innerHTML}`);
  console.log(`Starting Height ${document.getElementById('height').innerHTML}`);

  window.addEventListener('resize', e => {
    width.innerHTML = window.innerWidth;
    height.innerHTML = window.innerHeight;
    console.log("updated");
  });
});
