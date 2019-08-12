$(function() {
  children_list = $("#deal-form-input");

  $("#parent-list").change(function() {
    var parents = $(this).val();
    
    $.ajax({
      type: 'GET',
      url: '/products/new',
      data: { id: parents },
      dataType: 'json'
    })
    
    .done(function(parent) {
      var children = parent.children.forEach(function(child){
                    `<option value = ${child.id}>${child.name}</option>`
                    });
      var childrens =  `<div class = "select-form">
                        <i class = "fa fa-angle-down"></i>
                        <select class = 'select-list',id = 'child-list'>
                          <option>---</option>
                          ${children}
                        </select>
                      </div>`
      children_list.append(childrens);
    })
  });
});