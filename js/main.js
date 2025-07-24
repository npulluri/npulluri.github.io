// Scrolls to selected menu item, changes it's class to active,
// and disables scrollspy watcher
$(".nav li a[href^='#']").on('click', function(e) {
  $('#navbar').removeClass('spy-active');
  $(".nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
  e.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 1000, function(){
    window.location.hash = hash;
    $('#navbar').addClass('spy-active');
  });
});

$(".text-vertical-center a[href^='#']").on('click', function(e) {
  e.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 1000, function(){
    window.location.hash = hash;
  });
});

//Change Navbar to Active on Scroll via scrollspy
$('body').scrollspy({ target: '.spy-active', offset: 50});

// Close collapsed menu on click
$(".nav li a").click(function(){
  $(".navbar-collapse").collapse('hide');
});

//Bootstrap Tooltip Opt-in
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
