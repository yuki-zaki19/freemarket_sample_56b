$(document).on('turbolinks:load', function() { 

  document.getElementById('display-none').onchange = function(event){
    initializeFiles();

    var files = event.target.files;

    for (var i = 0, f; f = files[i]; i++) {
      var reader = new FileReader;
      reader.readAsDataURL(f);

      reader.onload = (function(theFile) {
        return function (e) {
          var div = document.createElement('div');
          div.className = 'upload-product';
          div.innerHTML += '<img class="upload-product__image" src="' + e.target.result + '" />';
          div.innerHTML += '<div class="upload-product__button" >' + '<a href class = upload-product__button__edit>編集</a>' + '<a href>削除</a>' + '</div>';
          document.getElementById('insert-image-box').insertBefore(div, null);
        }
      })(f);
    }
  };

  function initializeFiles() {
    document.getElementById('insert-image-box').appendChild = '';
  }
  var form_shipping = $("#form-shipping")
  var select_form_shipping = $("#select-form-shipping")
  $(document).on("change", "#select-list-burden",function(){
    var addLABEL = `<label>
                      配送の方法
                    </label>
                      <span class = "form_required">
                        必須
                      </span>`
                  
    var addFORM = `<div class = "select-form-shipping-box">
                      <i class = "fa fa-angle-down" ></i>
                      <select class = "select-list" name = 'product[shipping]'>
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
      tagOutputFee.append(fee);
      var profit = num - fee;
      tagOutputProfit.append(profit)
		}
  });
});
