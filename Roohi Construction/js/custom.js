(function ($) {
  "use strict";

  /*  Navbar Bar */

  $(".navbar-nav .nav-link").on("click", function () {
    var toggle = $(".navbar-toggler").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  /* Scroll To Top */

  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#scroll-to-top").fadeIn();
      } else {
        $("#scroll-to-top").fadeOut();
      }
    });

    $("#scroll-to-top").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        200
      );
      return false;
    });
  });

  /* Smooth Scroll */

  $('a[href*="#"]:not([href="#"])').on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") ||
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 65,
          },
          0
        );
        return false;
      }
    }
  });
})(jQuery);
