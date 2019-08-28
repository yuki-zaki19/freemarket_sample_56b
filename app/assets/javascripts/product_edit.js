$(document).on('turbolinks:load', function() { 

  var num = $("#insert-image-box1").find(".prev-image-content__image-box__prev").length 
  var delete_btn = $(".prev-image-content__image-box__prev__update--delete").children("label")
  console.log(num)

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
      var num = $("#insert-image-box1").find(".prev-image-content__image-box__prev").length + files.length
      for (var i = 0, f; f = files[i] ; i++) {
        console.log(num)
        files_array.push(f);
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
            div.innerHTML += '<img class="prev-image-content__image-box__prev__image" src="' + e.target.result + '" />';
            div.innerHTML += '<div class="prev-image-content__image-box__prev__update" >' + '<div class = prev-image-content__image-box__prev__update--edit>編集</div>' + '<div class = .prev-image-content__image-box__prev__update--delete>削除</div>' + '</div>';
            $('.prev-image-content__image-box').append(div);
          }
        })();
      };
    }
  })

  var num = $("#insert-image-box1").find(".prev-image-content__image-box__prev").length 
  var delete_btn = $(".prev-image-content__image-box__prev__update--delete").children("label")
  console.log(num)

  if (num < 5){
    $(".prev-image-content__upload-box").css("display", "inline-block")
    }
    if (num >= 5){
      $(".prev-image-content__upload-box").css("display", "none")
      $(".prev-image-content__upload-box2").css("display", "inline-block")
    }
    if(num == 10){
      $(".prev-image-content__upload-box2").css("display", "none")
    }



  $(delete_btn).on("click", function(){

      ee = $(this).parent().parent().parent()
      $(ee).removeClass("prev-image-content__image-box__prev")
      $(this).parent().parent().parent().hide()
      num = num - 1
      console.log(num)
      var new_width = 140 * num
    
  if (num < 5){
  $(".prev-image-content__upload-box").css("display", "inline-block")
  $(".prev-image-content__upload-box2").css("display", "none")
  $(".prev-image-content__upload-box").css("width", "620" - new_width + "px")
  }
  else if (num >= 5){
    var new_width = 140 * (num - 5 )
    $(".prev-image-content__upload-box").css("display", "none")
    $(".prev-image-content__upload-box2").css("display", "inline-block")
    $(".prev-image-content__upload-box2").css("width", "620" - new_width + "px")

  }
  else if(num == 10){
    $(".prev-image-content__upload-box2").css("display", "none")
  }
})
  // done_id = $(".done-btn").data("done-id")
  // $(document).on("click", "done_id",function(){
  //   $("#done-check").css("display","none")
  // })

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
    readURL(this);
  });

  $(".edit_modal").on("click", ".edit_modal__inner__btn--done", function(){
  })

  })

    // 画像がなければアラート
    $(".exhibition-content__form").on("submit", function(e){
      // e.preventDefault();
  
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
      var url = $(this).attr('action')
      $.ajax({
        url:         "/products/update",
        type:        "POST",
        data:        formData,
        contentType: false,
        processData: false,
        dataType:   'json'
      })
      .done(function(data){
      });
    });
  
})