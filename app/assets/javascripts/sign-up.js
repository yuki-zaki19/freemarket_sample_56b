// ３ページ目のモーダル
$(function(){  // 「.modal_open」をクリックしたらモーダルと黒い背景を表示する 
  $(document).on('click', "#next-btn", function(){
    $('body').append('<div class="modal_bg3"></div>');
    $('.modal_bg3').fadeIn(); 
    $(".user-info__header__progress__flat-bar__left").css({'z-index': '3', 'width': '100px' })

    $("body").css({overflow:'hidden'}); //背景固定
      function modalResize(){
        var w = $(window).width();
        var h = $(window).height();
        var x = (w - $(".sign-up-page-3").outerWidth(true)) / 2;
        var y = (h - $(".sign-up-page-3").outerHeight(true)) / 2;
        $(".sign-up-page-3").css({'left': x + 'px','top': y + 'px'});
      }
      modalResize(); //真ん中表示
    $(".sign-up-page-3").fadeIn(); // modalをフェードインで表示
    $('.modal_bg, .modal_close').off().click(function(){ // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
      $('.sign-up-page-3').fadeOut();
      $('.modal_bg').fadeOut('slow',function(){
        $('.modal_bg').remove();
        $('html, body').removeClass('lock');
      });
    });
 // ウィンドウがリサイズされたらモーダルの位置を再計算する
  $(window).on('resize', function(){
    modalResize();
  });
});
});

// 4ページ目のモーダル
$(function(){  // 「.modal_open」をクリックしたらモーダルと黒い背景を表示する
  $(document).on('click', '.sign-up__tel-authentication__body__content__btn-group__btn', function(){ 
    $('body').append('<div class="modal_bg4"></div>');
    $('.modal_bg4').fadeIn(); 
    $(".user-info__header__progress__flat-bar__left").css({'z-index': '4', 'width': '230px' })
      function modalResize(){
        var w = $(window).width();
        var h = $(window).height();
        var x = (w - $(".sign-up-page-4").outerWidth(true)) / 2;
        var y = (h - $(".sign-up-page-4").outerHeight(true)) / 2;
        $(".sign-up-page-4").css({'left': x + 'px','top': y + 'px'});
      }
      modalResize(); //真ん中表示
    $(".sign-up-page-4").fadeIn(); // modalをフェードインで表示
    $('.modal_bg, .modal_close').off().click(function(){ // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
      $('.sign-up-page-4').fadeOut();
      $('.modal_bg').fadeOut('slow',function(){
        $('.modal_bg').remove();
        $('html, body').removeClass('lock');
      });
    });
 // ウィンドウがリサイズされたらモーダルの位置を再計算する
  $(window).on('resize', function(){
    modalResize();
  });
});
});

// 5ページ目のモーダル
$(function(){  // 「.modal_open」をクリックしたらモーダルと黒い背景を表示する
  $(document).on('click', '.sign-up__shipping-address__next-btn', function(){ 
    $('body').append('<div class="modal_bg5"></div>');
    $('.modal_bg5').fadeIn(); 
    $(".user-info__header__progress__flat-bar__left").css({'z-index': '5', 'width': '340px' })

      function modalResize(){
        var w = $(window).width();
        var h = $(window).height();
        var x = (w - $(".sign-up-page-5").outerWidth(true)) / 2;
        var y = (h - $(".sign-up-page-5").outerHeight(true)) / 2;
        $(".sign-up-page-5").css({'left': x + 'px','top': y + 'px'});
      }
      modalResize(); //真ん中表示
    $(".sign-up-page-5").fadeIn(); // modalをフェードインで表示
    $('.modal_bg, .modal_close').off().click(function(){ // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
      $('.sign-up-page-5').fadeOut();
      $('.modal_bg').fadeOut('slow',function(){
        $('.modal_bg').remove();
        $('html, body').removeClass('lock');
      });
    });
 // ウィンドウがリサイズされたらモーダルの位置を再計算する
  $(window).on('resize', function(){
    modalResize();
  });
});
});

// 6ページ目のモーダル
$(function(){  // 「.modal_open」をクリックしたらモーダルと黒い背景を表示する
  $(document).on('click', '.identification-registration-btn', function(){ 
    $('body').append('<div class="modal_bg6"></div>');
    $('.modal_bg6').fadeIn(); 
    $(".user-info__header__progress__flat-bar__left").css({'z-index': '6', 'width': '420px' })

      function modalResize(){
        var w = $(window).width();
        var h = $(window).height();
        var x = (w - $(".sign-up-page-6").outerWidth(true)) / 2;
        var y = (h - $(".sign-up-page-6").outerHeight(true)) / 2;
        $(".sign-up-page-6").css({'left': x + 'px','top': y + 'px'});
      }
      modalResize(); //真ん中表示
    $(".sign-up-page-6").fadeIn(); // modalをフェードインで表示
    $('.modal_bg, .modal_close').off().click(function(){ // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
      $('.sign-up-page-6').fadeOut();
      $('.modal_bg').fadeOut('slow',function(){
        $('.modal_bg').remove();
        $('html, body').removeClass('lock');
      });
    });
 // ウィンドウがリサイズされたらモーダルの位置を再計算する
  $(window).on('resize', function(){
    modalResize();
  });
});
});


