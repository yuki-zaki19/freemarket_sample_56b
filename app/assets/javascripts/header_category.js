$(function() {
  // カテゴリープルダウンボックスの作成
  children_list = $("#select-form-children");
  grandChildren_list = $("#select-form-grandchild");

  function appendForm(category){
    var addChildForm =　`<option value = ${category.id}  data-value = ${category.id}>${category.name}</option>`;
    return addChildForm;
  }
  // 子のプルダウンボックスの作成
  $("#parent-list").on('change',function() {
    var parents = $(this).val();
    console.log(this)
    if (parents != "---"){
      $.ajax({
        type: 'GET',
        url: 'get_category_children',
        data: { id: parents },
        dataType: 'json'
      })
      
      .done(function(children) {
        $('#children-category').remove();
        var insertChildHtml = '';
        children.forEach(function(child){
          insertChildHtml += appendForm(child);
        });
        var childSelectForm = `<div class = "select-form", id = "children-category">
                                  <i class = "fa fa-angle-down"></i>
                                  <select class = 'select-list', id = 'child-list'>
                                    <option value = 0 data-value = 0>---</option>
                                    ${insertChildHtml}
                                  </select>
                              </div>`
        children_list.append(childSelectForm);
      })
      .fail(function(){
        alert('カテゴリー取得に失敗しました');
      })
    }else{
      $('#children-category').remove();
      $('#grandchildren-category').remove();
    }
  });
  // 孫のプルダウンボックスの作成
  $("#select-form-children").on('change', '#children-category', function(){
    var childId = $('#child-list option:selected').data('value');
    if (childId != "0"){
      $.ajax({
        type: 'GET',
        url: 'get_category_grandchildren',
        data: { child_id: childId },
        dataType: 'json'
      })

      .done(function(grandchildren){
        if (grandchildren.length != 0) {
          $('#grandchildren-category').remove();
          var insertGrandChildHTML = '';
          grandchildren.forEach(function(grandchild){
            insertGrandChildHTML += appendForm(grandchild);
          });
          var grandChildSelectForm = `<div class = "select-form", id = "grandchildren-category">
                                          <i class = "fa fa-angle-down"></i>
                                          <select class = 'select-list', id = 'grandchild-list' name = 'product[category_id]'>
                                            <option value = 0 data-value = 0>---</option>
                                            ${insertGrandChildHTML}
                                          </select>
                                      </div>`
          grandChildren_list.append(grandChildSelectForm);
        }
      })
      .fail(function(){
        alert('カテゴリー取得に失敗しました');
      })
    }else{
      $('#grandchildren-category').remove();
    }
  });

  // サイズボックスの作成
  var form_size = $("#form-size")
  var select_form_size = $("#select-form-size")
  $("#select-form-grandchild").on("change", "#grandchildren-category",function(){
    var grandchildId = $('#grandchild-list option:selected').data('value');
    if (grandchildId != "0"){
      var addLABEL = `<label id = size-label>
                        サイズ
                      </label>
                        <span id = "form_required-size">
                          必須
                        </span>`
                    
      var addFORM = `<div class = "select-form-size-box">
                        <i class = "fa fa-angle-down" ></i>
                        <select class = "select-list" name = 'product[size]'>
                          <option value = 0>---</option>
                          <option value = 1>XXS以下</option>
                          <option value = 2>XS(SS)</option>
                          <option value = 3>S</option>
                          <option value = 4>M</option>
                          <option value = 5>L</option>
                          <option value = 6>XL(LL)</option>
                          <option value = 7>2XL(3L)</option>
                          <option value = 8>3XL(4L)</option>
                          <option value = 9>4XL(5L)以上</option>
                          <option value = 10>FREE SIZE</option>
                        </select>
                    </div>`
      form_size.append(addLABEL);
      select_form_size.append(addFORM);
    }else{
      $('#size-label').remove();
      $('#form_required-size').remove();
      $('.select-form-size-box').remove();
    }
  });
  // ブランドボックスの作成
  var form_brand = $("#form-brand")
  var select_form_brand = $("#select-form-brand")
  $("#select-form-grandchild").on("change", "#grandchildren-category",function(){
    var grandchildId = $('#grandchild-list option:selected').data('value');
    if (grandchildId != "0"){
      var addLABEL = `<label id = brand-label>
                        ブランド
                      </label>
                        <span id = "form_required-brand">
                          任意
                        </span>`
                    
      var addFORM = `<div class = "select-form-brand-box">
                        <input class = "input-brand", placeholder = "例)NIKE" name = 'product[brand]'>
                    </div>`
      form_brand.append(addLABEL);
      select_form_brand.append(addFORM);
    }else{
      $('#size-brand').remove();
      $('#form_required-brand').remove();
      $('.select-form-brand-box').remove();
    }
  });

});