$(document).on('turbolinks:load', function() { 

  defaultNum = $("#insert-image-box1").find(".prev-image-content__image-box__prev").length 
  console.log(defaultNum)

  var files_array = [];

  $('#upload-dropbox').on('dragover',function(e){
    e.preventDefault();
    this.style.background = "#ea352d";
  });

  $('#upload-dropbox').on('dragleave',function(e){
    e.preventDefault();
    this.style.background = "#f5f5f5";
  });

  $('#upload-dropbox').on('drop',function(e){
    e.preventDefault();
    this.style.background = "#f5f5f5";

    var files = e.originalEvent.dataTransfer.files;
    var fileNumber = files.length + $("#insert-image-box").find(".upload-product").length
    if (fileNumber < 11){
      var num = $("#insert-image-box").find(".upload-product").length + files.length
      for (var i = 0; i < files.length; i++) {
        files_array.push(files[i]);
        var fr = new FileReader();
        fr.readAsDataURL(files[i]);
        fr.onload = (function() {
          return function (e) {
            var div = document.createElement('div');
            div.className = 'upload-product';
            div.innerHTML += '<img class="upload-product__image" src="' + e.target.result + '" />';
            div.innerHTML += '<div class="upload-product__button" >' + '<a href class = upload-product__button__edit>編集</a>' + '<a class = upload-product__button__delete>削除</a>' + '</div>';
            document.getElementById('insert-image-box').insertBefore(div, null);
          }
        })();
      }
      if(num == 1){
        $(".upload-dropbox").css('width','485px');
      }else if(num == 2){
        $(".upload-dropbox").css('width','350px');
      }else if(num == 3){
        $(".upload-dropbox").css('width','234px');
      }else if(num == 4){
        $(".upload-dropbox").css('width','110px');
      }else if(num == 5){
        $(".upload-dropbox").css('width','620px');
        $("#insert-image-box").css('height','340px');
      }else if(num == 6){
        $(".upload-dropbox").css('width','485px');
      }else if(num == 7){
        $(".upload-dropbox").css('width','350px');
      }else if(num == 8){
        $(".upload-dropbox").css('width','234px');
      }else if(num == 9){
        $(".upload-dropbox").css('width','110px');
      }else{
        $(".upload-dropbox").css('display','none');
      }
    }else if(fileNumber > 10){
      alert("現在のファイル選択数："+fileNumber+"です。再度しなおしてください。");
    }
  });


  function initializeFiles() {
    // insert-image-boxの一番後ろに空の箱を挿入
    document.getElementById('insert-image-box').appendChild = '';
  }
  $("#display-none").on('change',function(e) {
    var fileList = document.getElementById("display-none").files;
    var fileNumber = fileList.length + $("#insert-image-box").find(".upload-product").length
    if (fileNumber < 11){
      initializeFiles();
      var files = e.target.files;
      var num = $("#insert-image-box").find(".upload-product").length + files.length
      for (var i = 0, f; f = files[i] ; i++) {
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
            div.className = 'upload-product';
            div.innerHTML += '<img class="upload-product__image" src="' + e.target.result + '" />';
            div.innerHTML += '<div class="upload-product__button" >' + '<a class = upload-product__button__edit>編集</a>' + '<a class = upload-product__button__delete>削除</a>' + '</div>';
            // document.getElementById('insert-image-box').insertBefore(div, null);
            document.getElementById('insert-image-box').append(div);
          }
        })();
      }
      if(num == 1){
        $(".upload-dropbox").css('width','485px');
      }else if(num == 2){
        $(".upload-dropbox").css('width','350px');
      }else if(num == 3){
        $(".upload-dropbox").css('width','234px');
      }else if(num == 4){
        $(".upload-dropbox").css('width','110px');
      }else if(num == 5){
        $(".upload-dropbox").css('width','620px');
        $("#insert-image-box").css('height','340px');
      }else if(num == 6){
        $(".upload-dropbox").css('width','485px');
      }else if(num == 7){
        $(".upload-dropbox").css('width','350px');
      }else if(num == 8){
        $(".upload-dropbox").css('width','234px');
      }else if(num == 9){
        $(".upload-dropbox").css('width','110px');
      }else{
        $(".upload-dropbox").css('display','none');
      }
    }else if(fileNumber > 10){
      alert("現在のファイル選択数："+fileNumber+"です。再度しなおしてください。");
    }
  });

  //削除ボタンを押すと、写真が削除されるコマンド
  jQuery("#insert-image-box").on("click", '.upload-product__button__delete', function(){
    var numNum = $("#insert-image-box").find(".upload-product").length
    var index = $(".upload-product__button__delete").index(this);
    files_array.splice(index - 1, 1);
    $(this).parent().parent().remove();
    numNum = numNum - 1
    if(numNum == 1){
      $(".upload-dropbox").css('width','485px');
    }else if(numNum == 2){
      $(".upload-dropbox").css('width','350px');
    }else if(numNum == 3){
      $(".upload-dropbox").css('width','234px');
    }else if(numNum == 4){
      $(".upload-dropbox").css('width','110px');
      $("#insert-image-box").css('height','160px');
    }else if(numNum == 5){
      $(".upload-dropbox").css('width','620px');
      $("#insert-image-box").css('height','340px');
    }else if(numNum == 6){
      $(".upload-dropbox").css('width','485px');
    }else if(numNum == 7){
      $(".upload-dropbox").css('width','350px');
    }else if(numNum == 8){
      $(".upload-dropbox").css('width','234px');
    }else if(numNum == 9){
      $(".upload-dropbox").css('width','110px');
      $(".upload-dropbox").css('display','inline-block');
    }else if(numNum == 0){
      $(".upload-dropbox").css('width','620px');
    }else{
      $(".upload-dropbox").css('display','none');
    };
  });
  
  // 編集ボタンを押すとモーダルがでるコマンド
  $("#insert-image-box").on('click', ".upload-product__button__edit", function(){
    var nextThis = this
    $(".upload-product__modal-image").remove()
    var child = $("#insert-image-box").next()
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
      var index = $(".upload-product__button__edit").index(this);
      var reader = new FileReader;
      reader.readAsDataURL(files_array[index]);
      reader.onload = (function() {
        return function (e) {
          $("#edit_modal__inner__content--image--new").append('<img class="upload-product__modal-image" src="' + e.target.result + '" />');
        }
      })();
    child.fadeIn(); // modalをフェードインで表示

      // モーダルの画像変更ボタンを押した時の挙動
    $(".edit_modal").on("click", ".edit-new-image", function(){
      var a = $(this).prev()
      // モーダルの画像を変更
      var parent = $(this).parent().parent().parent().parent().parent().parent().children().next().next().children().next().children().children().next().children().children()
      var parent2 = $(nextThis).parent().parent().children()
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
        }
      }
      $(a).change(function() {
        $(".edit_modal__inner__btn--done").css("display","block")
        readURL(this);
      });
    })

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

    

  var form_shipping = $("#form-shipping")
  var select_form_shipping = $("#select-form-shipping")
  $(document).on("change", "#select-list-burden",function(){
    $('.select-form-shipping-box').remove();
    $('#shipping-label').remove();
    $('#form_required-shipping').remove();
    var addLABEL = `<label id = "shipping-label">
                      配送の方法
                    </label>
                      <span id = "form_required-shipping">
                        必須
                      </span>`
                  
    var addFORM = `<div class = "select-form-shipping-box">
                      <i class = "fa fa-angle-down" ></i>
                      <select class = "select-list" name = 'product[shipping_id]' id = "product_shipping_id" >
                        <option value = 0>---</option>
                        <option value = 1>未定</option>
                        <option value = 2>らくらくメルカリ便</option>
                        <option value = 3>ゆうメール</option>
                        <option value = 4>レターパック</option>
                        <option value = 5>普通郵便（定形、定形外）</option>
                        <option value = 6>クロネコヤマト</option>
                        <option value = 7>ゆうパック</option>
                        <option value = 8>クリックポスト</option>
                        <option value = 9>ゆうパケット</option>
                      </select>
                  </div>`


    form_shipping.append(addLABEL);
    select_form_shipping.append(addFORM);
    var input = $("#product_shipping_id").val();

  });

  var percent = 0.1;
  var minNum = 300;
  var maxNum = 9999999;
  var tagInput = $('#input-price'); // 入力対象のinputタグID名
	var tagOutputFee = $('#fee-num'); // 出力対象のinputタグID名
  var tagOutputProfit = $('#profit-num');// 出力対象のinputタグID名
  tagInput.on('change', function(){
    $("#fee-num").empty();
    $("#profit-num").empty();
    var str = $(this).val();
    var num = Number(str.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
		if(num == 0) {
			num = '';
		} else if (num > maxNum) { // 上限を超える個数を入力した場合
			num = maxNum;
		} else if (num < minNum) {
      num = minNum
    }
    $(this).val(num);
		if(num != 0) {
      var fee = num * percent;
      clearNum = Math.round(fee / 10) * 10 
      addClearNum = "¥" + clearNum.toLocaleString();
      tagOutputFee.append(addClearNum);
      var profit = "¥" + (num - clearNum).toLocaleString();
      tagOutputProfit.append(profit)
    }
  });

  if(defaultNum == 0){
  // 画像がなければアラート
  $(".exhibition-content__form").on("submit", function(e){
    e.preventDefault();
    var submitFileNumber = $("#insert-image-box").find(".upload-product").length
    if( submitFileNumber == 0){
      e.preventDefault();
      alert("ファイルがアップロードされてません。アップロードしてください。");
    }
    var formData = new FormData(this);
    formData.delete("product[images][]");
    files_array.forEach(function(file){
      formData.append("product[images][]",file)
    });
    var url = $(this).attr('action')
    $.ajax({
      url:         url,
      type:        "POST",
      data:        formData,
      contentType: false,
      processData: false,
      dataType:   'json'
    })
    .done(function(){
      alert("出品が成功しました")
      location.href ="/"
    })
    .fail(function(){
      alert("出品が失敗しました");
    });
  });
  }
});


