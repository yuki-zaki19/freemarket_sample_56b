$(document).on('turbolinks:load', function() { 
  var files_array = [];
  // var dropZone = document.getElementById("upload-dropbox");

  // dropZone.addEventListener("dragover", function(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   this.style.background = "#ea352d";
  // }, false);

  // dropZone.addEventListener("dragleave", function(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   this.style.background = "#f5f5f5";
  // }, false);

  // dropZone.addEventListener("drop", function(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   this.style.background = "#f5f5f5";

  //   var files = e.dataTransfer.files;
  //   var fileNumber = files.length + $("#insert-image-box").find(".upload-product").length
  //   if (fileNumber < 11){
  //     var num = $("#insert-image-box").find(".upload-product").length + files.length
  //     for (var i = 0; i < files.length; i++) {
  //       (function() {

  //         var fr = new FileReader();
  //         fr.onload = function() {
  //           var div = document.createElement('div');
  //           div.className = 'upload-product';
  //           div.innerHTML += '<img class="upload-product__image" src="' + fr.result + '" />';
  //           div.innerHTML += '<div class="upload-product__button" >' + '<a href class = upload-product__button__edit>編集</a>' + '<a class = upload-product__button__delete>削除</a>' + '</div>';
  //           document.getElementById('insert-image-box').insertBefore(div, null);
  //         };
  //         fr.readAsDataURL(files[i]);
  //       })();
        
  //       formData.append("file", files[i]);
  //     }
  //     if(num == 1){
  //       $(".upload-dropbox").css('width','485px');
  //     }else if(num == 2){
  //       $(".upload-dropbox").css('width','350px');
  //     }else if(num == 3){
  //       $(".upload-dropbox").css('width','234px');
  //     }else if(num == 4){
  //       $(".upload-dropbox").css('width','110px');
  //     }else if(num == 5){
  //       $(".upload-dropbox").css('width','620px');
  //       $("#insert-image-box").css('height','340px');
  //     }else if(num == 6){
  //       $(".upload-dropbox").css('width','485px');
  //     }else if(num == 7){
  //       $(".upload-dropbox").css('width','350px');
  //     }else if(num == 8){
  //       $(".upload-dropbox").css('width','234px');
  //     }else if(num == 9){
  //       $(".upload-dropbox").css('width','110px');
  //     }else{
  //       $(".upload-dropbox").css('display','none');
  //     }
  //   }else if(fileNumber > 10){
  //     alert("現在のファイル選択数："+fileNumber+"です。再度しなおしてください。");
  //   }
  // }, false);

  function initializeFiles() {
    // insert-image-boxの一番後ろに空の箱を挿入
    document.getElementById('insert-image-box').appendChild = '';
  }
  $("#display-none").on('change',function(e) {
    var fileList = document.getElementById("display-none").files;
    var fileNumber = fileList.length + $("#insert-image-box").find(".upload-product").length
    if (fileNumber < 11){

      // ビュー側
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
              div.innerHTML += '<div class="upload-product__button" >' + '<a href class = upload-product__button__edit>編集</a>' + '<a class = upload-product__button__delete>削除</a>' + '</div>';
              //insertbeforeで第２引数のnullの前に第１引数の変数divを挿入
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
  $(document).on("click", '.upload-product__button__delete', function(){
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
  // 画像がなければアラート
  $(".exhibition-content__form").on("submit", function(e){
    e.preventDefault();

    var submitFileNumber = $("#insert-image-box").find(".upload-product").length
    if( submitFileNumber == 0){
      alert("ファイルがアップロードされてません。アップロードしてください。");
    }

    // サーバー側
    var formData = new FormData(this);
    formData.delete("product[images][]");
    files_array.forEach(function(file){
      formData.append("product[images][]",file)
    });
    // formData.append("product[images][]", files_array)
    var url = $(this).attr('action')
    $.ajax({
      url:         url,
      type:        "POST",
      data:        formData,
      contentType: false,
      processData: false,
      dataType:   'json'
    })
    .done(function(data){
    });
  });
});


