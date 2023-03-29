jQuery(document).ready(function ($) {
  "use strict";

  $("#form-submit .date").datepicker({});

  var owl = $("#owl-suiteroom");

  owl.owlCarousel({
    pagination: true,
    paginationNumbers: false,
    autoPlay: 6000, //Set AutoPlay to 3 seconds
    items: 1, //10 items above 1000px browser width
    itemsDesktop: [1000, 1], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 1], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
  });

  var owl = $("#owl-mostvisited");

  owl.owlCarousel({
    pagination: true,
    paginationNumbers: false,
    autoPlay: 6000, //Set AutoPlay to 3 seconds
    items: 4, //10 items above 1000px browser width
    itemsDesktop: [1000, 4], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
  });

  $(".recommendedgroup > div").hide();
  $(".recommendedgroup > div:first-of-type").show();
  $(".tabs a").click(function (e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = "#" + $this.parents(".tabs").data("recommendedgroup"),
      others = $this.closest("li").siblings().children("a"),
      target = $this.attr("href");
    others.removeClass("active");
    $this.addClass("active");
    $(tabgroup).children("div").hide();
    $(target).show();
  });

  $(".weathergroup > div").hide();
  $(".weathergroup > div:first-of-type").show();
  $(".tabs a").click(function (e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = "#" + $this.parents(".tabs").data("weathergroup"),
      others = $this.closest("li").siblings().children("a"),
      target = $this.attr("href");
    others.removeClass("active");
    $this.addClass("active");
    $(tabgroup).children("div").hide();
    $(target).show();
  });

  $(".tabgroup > div").hide();
  $(".tabgroup > div:first-of-type").show();
  $(".tabs a").click(function (e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = "#" + $this.parents(".tabs").data("tabgroup"),
      others = $this.closest("li").siblings().children("a"),
      target = $this.attr("href");
    others.removeClass("active");
    $this.addClass("active");
    $(tabgroup).children("div").hide();
    $(target).show();
  });

  $(".pop-button").click(function () {
    $(".pop").fadeIn(300);
  });

  $(".pop > span").click(function () {
    $(".pop").fadeOut(300);
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  $(".projects-holder").mixitup({
    effects: ["fade", "grayscale"],
    easing: "snap",
    transitionSpeed: 400,
  });
});

$(document).ready(function () {
  // navigation click actions
  $(".scroll-link").on("click", function (event) {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID("#" + sectionID, 750);
  });
  // scroll to top action
  $(".scroll-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
  // mobile nav toggle
  $("#nav-toggle").on("click", function (event) {
    event.preventDefault();
    $("#main-nav").toggleClass("open");
  });
});
// scroll function
function scrollToID(id, speed) {
  var offSet = 0;
  var targetOffset = $(id).offset().top - offSet;
  var mainNav = $("#main-nav");
  $("html,body").animate({ scrollTop: targetOffset }, speed);
  if (mainNav.hasClass("open")) {
    mainNav.css("height", "1px").removeClass("in").addClass("collapse");
    mainNav.removeClass("open");
  }
}
if (typeof console === "undefined") {
  console = {
    log: function () {},
  };
}
