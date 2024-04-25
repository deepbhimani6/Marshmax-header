import $ from "jquery";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap";

import { App } from "./parts/app.js";
import { Plugins } from "./parts/plugins.js";
import { Parts } from "./parts/parts.js";

// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(function () {
  window.windowWidth = $(window).width();
  window.windowHeight = $(window).height();

  window.isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
  window.isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
  window.isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");

  //Functions List Below

  window.app = new App();
  window.app.init();

  window.plugins = new Plugins();
  window.plugins.init();

  window.parts = new Parts();
  window.parts.init();
});

// ===========================================================================

// Select2 JS
$(document).ready(function () {
  $(".select-dropdown").select2();
  $(".product-option, .disable-search").select2({
    minimumResultsForSearch: -1,
  });
});

// fancy box
require("@fancyapps/ui/src/Fancybox/Fancybox");

// ===========================================================================

//header
$(window).scroll(function () {
  var sticky = $("header"),
    scroll = $(window).scrollTop();

  if (scroll >= 50) sticky.addClass("header-fixed");
  else sticky.removeClass("header-fixed");
});
var p = $("header");
$(".fake-header").css("height", p.innerHeight());

// $("[data-menu='true']").click(function () {
//   var isOpen = $(this).hasClass("open");
//   var siblings = $(this).parent().siblings().find(".open");
//   var openedMenu = siblings.data("menu-name");
//   $(openedMenu).toggleClass("show");
//   siblings.removeClass("open");
//   $(this).toggleClass("open");
//   var megamenu = $(this).data("menu-name");
//   $(megamenu).toggleClass("show");
//   if (!isOpen) {
//     $("body").addClass("fixed-bg");
//   } else {
//     $("body").removeClass("fixed-bg");
//   }
// });

// $(".menu-bg-overlay, .menu-close").click(function () {
//   $(".custom-mega-menu").removeClass("show");
//   $("body").removeClass("fixed-bg");
//   $(".mega-menu").removeClass("open");
// });

// $(".mega-menu-back").click(function () {
//   $(".custom-mega-menu").removeClass("show");
//   $("body").removeClass("fixed-bg");
//   $(".mega-menu").removeClass("open");
// });

$(document).ready(function () {
  if (innerWidth <= 991) {
    $(".sub-menu > a").click(function () {
      $(this).parent("li").toggleClass("open");
    });

    $(".menu-close").click(function () {
      $(".mega-menu-content").removeClass("opacity-100 visible");
      $(".tab-content").removeClass("opacity-100 visible");
      $(".brand-content h3").removeClass("open");
    });

    $(".mega-menu > a").click(function () {
      // if (innerWidth > 991) $("body").toggleClass("fixed-bg");
      // $("header").toggleClass("mega-menu-open");
      $(this).parent("li").toggleClass("open");
      $(".mega-menu-content").toggleClass("opacity-100 visible");
    });

    $(".nav > button").click(function () {
      $(".tab-content").addClass("opacity-100 visible");
    });

    $(".main-tab-header .back-to-menu").click(function () {
      $(".mega-menu-content").removeClass("opacity-100 visible");
    });

    $(".tab-content .back-to-menu").click(function () {
      $(".tab-content").removeClass("opacity-100 visible");
      $(".nav-link").removeClass("active");
      $(".brand-content h3").removeClass("open");
    });

    $(".menu-items button").click(function () {
      $(".brand-content h3").addClass("open");
    });

    $(".brand-content h3").click(function () {
      $(this).toggleClass("open");
    });
  }
});
