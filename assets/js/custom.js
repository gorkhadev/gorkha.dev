/*Custom JavaScript*/
$(function(){
  // lazy load images
  if(location.pathname != '/workshop-template') {
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();
  }

  // Activate wow.js
  new WOW().init();

  // Smooth-scroll initialization
  var scroll = new SmoothScroll('a[href*="#"]', { speed: 700, speedAsDuration: true });

  $(document).scroll(function () {
    var $nav = $(".navbar.fixed-top");
    if ($(this).scrollTop() > $nav.height() + 100 ) {
      $('#toTop').css('display', 'block');
    } else {
      $('#toTop').css('display', '');
    }
  });

  // Show scrolled navbar
  var $nav = $(".navbar.fixed-top");
  if (location.pathname == "/") {
    // Scroll down behavior
    $(document).scroll(function () {
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  } else {
    $nav.addClass("scrolled");
  }

  // message for doityourself exercises
  if (window.screen.availWidth < 768) {
    $('.best-view-message').append('<div class="alert alert-secondary alert-dismissible fade show" role="alert">Viewed best in Desktop or Tablet. \
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>');
  }

  // rendering youtube video in the Modal
  var $videoSrc;
  $(".youtube-video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  // when the modal is opened autoplay it
  $("#youtubeVideoModal").on("shown.bs.modal", function (e) {
    $("#youtubeVideo").attr("src", $videoSrc);
  });

  // stop playing the youtube video when I close the modal
  $("#youtubeVideoModal").on("hide.bs.modal", function (e) {
    $("#youtubeVideo").replaceWith(
      '<iframe class="embed-responsive-item" src="" id="youtubeVideo" allowscriptaccess="always" allow="autoplay"></iframe>'
    );
  });

  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .addClass("fa-minus")
      .removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });
});
