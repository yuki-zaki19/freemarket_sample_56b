$(document).on('turbolinks:load', function() { 
  // 初期設定
  $(document).ready( function(){
    $("[data-small-photo-id='0']").css("opacity","1")
    $("[data-big-photo-id='0']").css("opacity","1")
  })
 // マウスが乗った際に発火
  $(".product__details-photo__all-img-box__dot").on("mouseenter", function() {
    // 初期設定解除
    $("[data-small-photo-id='0']").css("opacity",".4")
    // カスタムデータ属性の取得
    var small_id = $(this).data("small-photo-id")
    // 取得したidの値に応じて左へスライド
    $(".product__details-photo__all").css("left","-300"* small_id)

    // 選択された画像にactクラスを付与
    $(this).addClass("act")
    $(`[data-big-photo-id= ${small_id}]`).addClass("act")
    
    // 付与したクラスを可視化
    $(".act").css("opacity","1")

    // マウスが離れた際の挙動
  $(".product__details-photo__all-img-box__dot").on("mouseleave", function() {
    $(this).removeClass("act")
    $(this).css("opacity",".4")
    $(`[data-big-photo-id= ${small_id}]`).removeClass("act")
  })
  })
})
