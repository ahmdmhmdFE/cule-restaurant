$(document).ready(function () {
  // Loading
  var counter = 0;
  var c = 0;
  var i = setInterval(function () {
    $(".loading-page .counter h1").html(c + "%");
    $(".loading-page .counter hr").css("width", c + "%");

    counter++;
    c++;

    if (counter == 101) {
      clearInterval(i);
      $(".loading-page").fadeOut("slow", function () {
        $(this).remove();
      });
    }
  }, 32);

  // Nav
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 40) {
      $("nav").addClass("top");
    } else {
      $("nav").removeClass("top");
    }
  });

  // Scroll Animate
  $(".navbar li a, .navbar ul button").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top - 55,
      },
      1200
    );
  });

  $(window).scroll(function () {
    $(".block").each(function () {
      if ($(window).scrollTop() >= $(this).offset().top - 60) {
        var blockID = $(this).attr("id");

        $("nav a").removeClass("active");
        $('nav li a[data-scroll="' + blockID + '"]').addClass("active");
      }
    });
  });

  // Menu
  $(".menu li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // Trigger MiItUp
  var mixer = mixitup(".sort");

  // Specials Left-Bar
  $(".specials .left-bar li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // Specials On Click Animation
  $(".specials .left-bar li").click(function () {
    if ($(this).hasClass("two")) {
      $(".specials .info-two").removeClass("hidden");
      $(".specials .info-one").addClass("hidden");
      $(".specials .info-three").addClass("hidden");
      $(".specials .info-four").addClass("hidden");
      $(".specials .info-five").addClass("hidden");
    } else if ($(this).hasClass("three")) {
      $(".specials .info-three").removeClass("hidden");
      $(".specials .info-one").addClass("hidden");
      $(".specials .info-two").addClass("hidden");
      $(".specials .info-four").addClass("hidden");
      $(".specials .info-five").addClass("hidden");
    } else if ($(this).hasClass("four")) {
      $(".specials .info-four").removeClass("hidden");
      $(".specials .info-one").addClass("hidden");
      $(".specials .info-two").addClass("hidden");
      $(".specials .info-three").addClass("hidden");
      $(".specials .info-five").addClass("hidden");
    } else if ($(this).hasClass("five")) {
      $(".specials .info-five").removeClass("hidden");
      $(".specials .info-one").addClass("hidden");
      $(".specials .info-two").addClass("hidden");
      $(".specials .info-four").addClass("hidden");
      $(".specials .info-three").addClass("hidden");
    } else if ($(this).hasClass("one")) {
      $(".specials .info-one").removeClass("hidden");
      $(".specials .info-three").addClass("hidden");
      $(".specials .info-two").addClass("hidden");
      $(".specials .info-four").addClass("hidden");
      $(".specials .info-five").addClass("hidden");
    }
  });

  // Owl Carousel (Events)
  $(".events .owl-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Owl Carousel (Testimonials)
  $(".testimonials .owl-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  // Veno Box (Gallary)
  $(document).ready(function () {
    $(".venobox").venobox({
      spinner: "three-bounce",
      spinColor: "#cda45e",
    });
  });

  // Init AOS
  AOS.init();

  // Init Tilt
  $(".about .about-img, .why-us .section-card,  .specials .img-box").tilt();
});
