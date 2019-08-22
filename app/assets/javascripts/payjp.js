document.addEventListener(
  'turbolinks:load', function(){
    if (document.getElementById("sign-up__complete__body__content__next-btn") != null) { //sign-up__complete__body__content__next-btnというidがnullの場合、下記コードを実行しない
      Payjp.setPublicKey("pk_test_98f693cfde0f1334954f4316"); //ここに公開鍵を直書き
      let btn = document.getElementById("sign-up__complete__body__content__next-btn");
      btn.addEventListener("click", function(e){ //ボタンが押されたときに作動します
        e.preventDefault(); //ボタンを一旦無効化します
        let card = {
          number: document.getElementById("cardbox-input").value,
          cvc: document.getElementById("cardbox-input-security").value,
          exp_month: document.getElementById("moon-box__selecter").value,
          exp_year: document.getElementById("year-box__selecter").value
        }; //入力されたデータを取得します。
        Payjp.createToken(card, function(status, response){
          if (status === 200) { //成功した場合
            $("#cardbox-input").removeAttr("name");
            $("#cardbox-input-security").removeAttr("name");
            $("#moon-box__selecter").removeAttr("name");
            $("#year-box__selecter").removeAttr("name"); //データを自サーバにpostしないように削除
            $("#card_token").append(
              $('<input type="hidden" name="payjp-token">').val(response.id)
            ); //取得したトークンを送信できる状態にします
            $("#new_user").submit();
            alert("登録が完了しました"); //確認用
          } else {
            alert("カード情報が正しくありません。"); //確認用
          }
        });
      });
    }
  },
  false
);