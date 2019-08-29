$(document).on('turbolinks:load', function() { 

  // 初期の画像の枚数
  var num = $("#insert-image-box1").find(".prev-image-content__image-box__prev").length 
  console.log(num)
  // 初期のアップロードボックスの大きさ指定
  if (num < 5){
    default_width = num * 124
    $(".prev-image-content__upload-box").css("width", "606" - default_width + "px")
    }
    if (num >= 5){
    default_width = (num - 5) * 124
    $(".prev-image-content__upload-box").css("width", "606" - default_width + "px")
    }
    if(num == 10){
      $(".prev-image-content__upload-box").css("display", "none")
    }

  // 画像の追加
  function initializeFiles() {
    // insert-image-boxの一番後ろに空の箱を挿入
    document.getElementById('insert-image-box1').appendChild = '';
  }
  var files_array = [];

  $("#display-none1").on('change',function(e) {
    var fileList = document.getElementById("display-none1").files;
    var fileNumber = fileList.length + $("#insert-image-box1").find(".prev-image-content__image-box__prev").length
    if (fileNumber < 11){
      initializeFiles();
      var files = e.target.files;
      // 追加された画像＋既存画像の枚数
      var num = $("#insert-image-box1").find(".prev-image-content__image-box__prev").length + files.length
      // 画像追加された際のアップロードボックスの大きさ指定
        if (num < 5){
          add_images_width = num * 124
          $(".prev-image-content__upload-box").css("width", "606" - add_images_width + "px")
          }
          else if (num >= 5){
            var add_images_width = 124 * (num - 5 )
            $(".prev-image-content__upload-box").css("width", "606" - add_images_width + "px")
          }
          else if(num == 10){
            $(".prev-image-content__upload-box").css("display", "none")
          }

        for (var i = 0, f; f = files[i] ; i++) {
        files_array.push(f);
        console.log(files_array)
        // filereaderオブジェクトを用いることでファイルを非同期で読み込む。
        // 読み込むファイルやデータは File ないし Blob オブジェクトとして指定します。
        var reader = new FileReader;
        // 指定された Blob オブジェクト（ここではforの時に定義してるf）を読み込みます。終了後の result プロパティには、ファイルのデータを示す data: URL が格納されます。
        reader.readAsDataURL(f);
        // onloadで変数readerに画像が読み込まれたらfunction以下が実行される
        reader.onload = (function() {
          return function (e) {
            var div = document.createElement('div');
            div.className = 'prev-image-content__image-box__prev';
            div.innerHTML += '<div class="prev-image-content__image-box__prev__image">' 
                          + '<img class="real_image" src="' + e.target.result + '"/>' 
                          + '</div>';
            div.innerHTML += '<div class="prev-image-content__image-box__prev__update" >'  
                          + '<div class = prev-image-content__image-box__prev__update--edit--add>編集</div>' 
                          + '<div class = prev-image-content__image-box__prev__update--delete--add>'
                          + '<label class = "delete-btn" >削除</label>'
                          + '</div>' 
                          + '</div>';
            $('.prev-image-content__image-box').append(div);
          }
        })();
      };
    }
  })

  // 追加した画像の削除
  $(".prev-image-content__image-box").on("click", ".prev-image-content__image-box__prev__update--delete--add", function(){
    var index = $(".prev-image-content__image-box__prev__update--delete--add").index(this)
    files_array.splice(index-1 , 1);
    var delete_image = $(this).parent().parent()
    delete_image.removeClass("prev-image-content__image-box__prev")
    delete_image.hide()
    var num = $("#insert-image-box1").find(".prev-image-content__image-box__prev").length 
    if (num < 5){
      default_width = num * 124
      $(".prev-image-content__upload-box").css("width", "606" - default_width + "px")
      }
      if (num >= 5){
      default_width = (num - 5) * 124
      $(".prev-image-content__upload-box").css("width", "606" - default_width + "px")
      }
      if(num == 10){
        $(".prev-image-content__upload-box").css("display", "none")
      }
    })




  // 削除ボタンの記述
  var delete_btn = $(".prev-image-content__image-box__prev__update--delete").children("label")
  $(delete_btn).on("click", function(){
      // 削除ボタンの親要素取得
      parent_box = $(this).parent().parent().parent()
      delete_box = parent_box.children().children(".prev-image-content__image-box__prev__update--delete")
      // 指定クラスの除去（画像枚数のカウントを変更するため）
      $(delete_box).removeClass("prev-image-content__image-box__prev__update--delete")
      $(parent_box).removeClass("prev-image-content__image-box__prev")
      // 画像要素を見えなくする
      $(this).parent().parent().parent().hide()
      
      num = num - 1
      var delete_width = 124 * num
      console.log(delete_width)
  if (num < 5){
  $(".prev-image-content__upload-box").css("width", "606" - delete_width + "px")
  }
  else if (num >= 5){
    var delete_width = 124 * (num - 5 )
    $(".prev-image-content__upload-box").css("width", "606" - delete_width + "px")
  }
  else if(num == 10){
    $(".prev-image-content__upload-box").css("display", "none")
  }
})

  // 編集ボタンの画像変更の記述
  $(".edit_modal").on("click", ".edit-image", function(){

var a = $(this).prev()
var parent = $(this).parent().parent().parent().parent().parent().parent().find("img")

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(".editedit").css('maxWidth','380px');
      $(".editedit").css('maxHeight','380px');
      $(".real_image").css('maxWidth','110px');
      $(".real_image").css('maxHeight','110px');
      $(parent).attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
  $(a).change(function() {
    $(".edit_modal__inner__btn--done").css("display","block")
    readURL(this);
  });
  })
// 編集ボタンを押すとモーダルがでるコマンド
$(document).on('click', ".prev-image-content__image-box__prev__update--edit--add", function(){
var nextThis = this
$(".upload-product__modal-image").remove()
var child = $("#insert-image-box1").children(".edit_modal--add")
console.log(child)
$('body').append('<div class="delete_modal_bg"></div>');
$('.delete_modal_bg').fadeIn(); 

// $("body").css({overflow:'hidden'}); //背景固定
function modalResize(){
var w = $(window).width();
var h = $(window).height();
var x = (w - $(".edit_modal--add").outerWidth(true)) / 2;
var y = (h - $(".edit_modal--add").outerHeight(true)) / 2;
$(".edit_modal--add").css({'left': x + 'px','top': "10" + 'px'});
}
modalResize(); //真ん中表示

var index = $(".prev-image-content__image-box__prev__update--edit--add").index(this)
console.log(index)
var reader = new FileReader;
reader.readAsDataURL(files_array[index]);
reader.onload = (function() {
return function (e) {
$(".edit_modal--add__inner__content--image--add").append('<img class="upload-product__modal-image" src="' + e.target.result + '" />');
}
})();
child.fadeIn(); // modalをフェードインで表示

// モーダルの画像変更ボタンを押した時の挙動
$(".edit_modal--add").on("click", ".edit-image--add", function(){
// input要素取得
var input_box = $(this).prev()
// モーダルの画像を変更
var parent = $(this).parent().parent().next().children().children(".upload-product__modal-image")
console.log(parent)
var parent2 = $(nextThis).parent().prev().children()
console.log(parent2)
function readURL(input) {
// ここで配列に画像データを入れることが必要
if (input.files && input.files[0]) {
var reader = new FileReader();
reader.onload = function (e) {
$(".upload-product__modal-image").css('maxWidth','380px');
$(".upload-product__modal-image").css('maxHeight','380px');
$(".real_image").css('maxWidth','110px');
$(".real_image").css('maxHeight','110px');
$(parent).attr('src', e.target.result);
$(parent2).attr('src', e.target.result);
}
reader.readAsDataURL(input.files[0]);
files_array.splice(index, 1, input.files[0])
console.log(files_array)
}
}
$(input_box).change(function() {
  $(".edit_modal--add__inner__btn--done").css("display","block")
readURL(this);
});
})

$('.edit_modal--add__inner__btn--cancel, .edit_modal--add__inner__btn--done').off().click(function(){ // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
$('.edit_modal--add').fadeOut();
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
  

// 画像がなければアラート
if (num >= 1){
$(".exhibition-content__form").on("submit", function(e){
  e.preventDefault();
  var submitFileNumber = $("#insert-image-box1").find(".prev-image-content__image-box__prev").length
  if( submitFileNumber == 0){
    e.preventDefault();
    alert("ファイルがアップロードされてません。アップロードしてください。");
  }
  // サーバー側
  var formData = new FormData(this);
  formData.delete("product[images][]");
  files_array.forEach(function(file){
    formData.append("product[images][]",file)
  });
  var product_id = $(".prev-image-content").data("product-id")
  var url = $(this).attr('action')
  var update_url = `/products/${product_id}`
  $.ajax({
    url:         update_url,
    type:        "POST",
    data:        formData,
    contentType: false,
    processData: false,
    dataType:   'json',
  })
  .done(function(){
    location.href = "/"
    alert("成功です")
  })
  .fail(function(){
    alert("失敗です")
  })
});
}
})