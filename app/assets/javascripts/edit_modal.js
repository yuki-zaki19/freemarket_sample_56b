$(function(){  // 「.modal_open」をクリックしたらモーダルと黒い背景を表示する 
  $(document).on('click', '.prev-image-content__image-box__prev__update--edit', function(){ 
    var child = $(this).next()
    $('body').append('<div class="delete_modal_bg"></div>');
    $('.delete_modal_bg').fadeIn(); 

    $("body").css({overflow:'hidden'}); //背景固定
      function modalResize(){
        var w = $(window).width();
        var h = $(window).height();
        var x = (w - $(".edit_modal").outerWidth(true)) / 2;
        var y = (h - $(".edit_modal").outerHeight(true)) / 2;
        $(".edit_modal").css({'left': x + 'px','top': "10" + 'px'});
      }
      modalResize(); //真ん中表示
    child.fadeIn(); // modalをフェードインで表示
    $('.edit_modal__inner__btn--cancel, .edit_modal__inner__btn--done').off().click(function(){ // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
      $('.edit_modal').fadeOut();
      $('.delete_modal_bg').fadeOut('slow',function(){
        $('.delete_modal_bg').remove();
        $('html, body').removeClass('lock');
        $("body").css({overflow:''}); //背景戻す
      });
    });
 // ウィンドウがリサイズされたらモーダルの位置を再計算する
  $(window).on('resize', function(){
    modalResize();
  });
});
});