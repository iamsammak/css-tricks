$(function() {
  $( "#slider" ).slider({
    min: 9,
    max: 42,
    value: 16
  });
  $( "#slider" ).on( "slidechange", function( event, ui ) {
    $('html').css('font-size', ui.value + 'px');
    $('.currentSize > code').html(ui.value + 'px');
    $('.flex_width').html((ui.value * 10) + 'px');
  });
});

// check out the document for the above jquery-ui code
// https://learn.jquery.com/jquery-ui/getting-started/


$(".module").prepend("<div class='module-control font-size-control'>Module: <input type='range'></div>");

$("input[type='range']").each(function() {
  var el = $(this);
  el.attr("min", 0.5);
  el.attr("max", 3.0);
  el.attr("step", 0.2);
  el.attr("value", el.parent().data("font-size-in-rem"));
})
.on("change", function() {
  $(this).closest(".module").css("font-size", $(this).val() + "rem");
});

$("#document-font-size-control")
.on("change", function() {
  $("html").css("font-size", $(this).val() + "rem");
});
