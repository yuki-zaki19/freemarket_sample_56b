$(document).on('turbolinks:load', function() { 
  $(document).ready( function(){
  all_image_id = $('.prev-image-content__image-box__prev:last').data('image-id');
    if (all_image_id <= 4){
      new_width = all_image_id * "130"
    $(".prev-image-content__upload-box").css("width", "620" - new_width + "px")
    }
    else if (all_image_id == 5){
      $(".prev-image-content__upload-box").css("display", "none")
      $(".prev-image-content__upload-box2").css("display", "inline-block")
      $(".prev-image-content__upload-box2").css("position", "relative")
    }
    else if (all_image_id >= 6){
      new_width = (all_image_id - 5) * "130"
      $(".prev-image-content__upload-box").css("display", "none")
      $(".prev-image-content__upload-box2").css("display", "inline-block")
      $(".prev-image-content__upload-box2").css("width", "620" - new_width + "px")
    }

    else if (all_image_id == 10){
      $(".prev-image-content__upload-box2").css("display", "none")
    }
  })

  delete_id = $(".delete-btn").data("delete-id")
  $(document).on("click", "delete_id",function(){
    $("#delete-check").css("display","none")
  })


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
})