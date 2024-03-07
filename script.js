setTimeout(function () {
  if (
    document.getElementsByTagName("html")[0].classList.contains("wf-active") !=
    true
  ) {
    document.getElementsByTagName("html")[0].classList.add("loading-delay");
  }
}, 3000);

//アコーディオンをクリックした時の動作
$(".title").on("click", function () {
  //タイトル要素をクリックしたら
  var findElm = $(this).next(".box"); //直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle(); //アコーディオンの上下動作

  if ($(this).hasClass("close")) {
    //タイトル要素にクラス名closeがあれば
    $(this).removeClass("close"); //クラス名を除去し
  } else {
    //それ以外は
    $(this).addClass("close"); //クラス名closeを付与
  }
});

//スクロールをしたら1度だけアニメーションをする設定
$(
  ".onayami-container,.nativeone-setumei ,.safety-wrap ,.banner_pc-img ,.banner_sp-img ,.accordion-area"
).on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(this).addClass("active"); //クラス名が付与
  }
});

//スクロールをしたら順番に度だけアニメーションをする設定
function delayScrollAnime() {
  var time = 0.2; // 遅延時間を増やす秒数の値（各要素間の遅延時間）
  $(".point-waku-wrap ,.voice-heading ,.voice-wrap ,.step-waku-warp").each(
    function (i) {
      var elemPos = $(this).offset().top; // 要素の位置まで来たら
      var scroll = $(window).scrollTop(); // スクロール値を取得
      var windowHeight = $(window).height(); // 画面の高さを取得

      if (
        scroll >= elemPos - windowHeight - 270 &&
        !$(this).hasClass("animated")
      ) {
        // 画面内に入ったかつアニメーション未実施の場合
        $(this)
          .css("animation-delay", i * time + "s")
          .addClass("fadeUp animated");
      }
    }
  );
}

// 画面をスクロールしたら動かしたい場合の記述
$(window).scroll(function () {
  delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
});
