$(function(){  // 「.modal_open」をクリックしたらモーダルと黒い背景を表示する 
  $(document).on('click', '#delete-btn', function(){ 
    $('body').append('<div class="delete_modal_bg"></div>');
    $('.delete_modal_bg').fadeIn(); 

    $("body").css({overflow:'hidden'}); //背景固定
      function modalResize(){
        var w = $(window).width();
        var h = $(window).height();
        var x = (w - $(".delete-modal").outerWidth(true)) / 2;
        var y = (h - $(".delete-modal").outerHeight(true)) / 2;
        $(".delete-modal").css({'left': x + 'px','top': "10" + 'px'});
      }
      modalResize(); //真ん中表示
    $(".delete-modal").fadeIn(); // modalをフェードインで表示
    $('.delete_modal_bg, .delete-modal__select--cancel').off().click(function(){ // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
      $('.delete-modal').fadeOut();
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