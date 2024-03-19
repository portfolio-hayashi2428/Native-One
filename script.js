setTimeout(function () {
  if (
    document.getElementsByTagName("html")[0].classList.contains("wf-active") !=
    true
  ) {
    document.getElementsByTagName("html")[0].classList.add("loading-delay");
  }
}, 5000);

/*-------------------------------------------
アコーディオン
-------------------------------------------*/
$(".title").on("click", function () {
  var findElm = $(this).next(".box");
  $(findElm).slideToggle();

  if ($(this).hasClass("close")) {
    $(this).removeClass("close");
  } else {
    $(this).addClass("close");
  }
});

/*-------------------------------------------
ふわっと表示 
-------------------------------------------*/
$(
  ".onayami-container,.nativeone-setumei ,.safety-wrap ,.banner_pc-img ,.banner_sp-img ,.accordion-area"
).on("inview", function (event, isInView) {
  if (isInView) {
    $(this).addClass("active");
  }
});

/*-------------------------------------------
順番にふわっと表示
-------------------------------------------*/
function delayScrollAnime() {
  var time = 0.2;
  $(".point-waku-wrap ,.voice-heading ,.voice-wrap ,.step-waku-warp").each(
    function (i) {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (
        scroll >= elemPos - windowHeight - 270 &&
        !$(this).hasClass("animated")
      ) {
        $(this)
          .css("animation-delay", i * time + "s")
          .addClass("fadeUp animated");
      }
    }
  );
}

$(window).scroll(function () {
  delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
});
