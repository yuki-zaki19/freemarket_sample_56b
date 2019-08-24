$(document).on('turbolinks:load', function() { 
$(function() {
	$(".header-category-list").hide();
	$(".header__inner__list__left__box__parent").on({
    'mouseenter': function() {
    $(this).find(".header-category-list").show();
    },
    'mouseleave': function() {
    $(this).find(".header-category-list").hide();
    }
  });
});

$(function() {
	$(".header-category-childlist").hide();
	$(".header-category-list").on({
    'mouseenter': function() {
    $(this).find(".header-category-childlist").show();
    },
    'mouseleave': function() {
    $(this).find(".header-category-childlist").hide();
    }
  });
});

$(function() {
	$(".header-category-grandlist").hide();
	$(".header-category-childlist").on({
    'mouseenter': function() {
    $(this).find(".header-category-grandlist").show();
    },
    'mouseleave': function() {
    $(this).find(".header-category-grandlist").hide();
    }
  });
});
})