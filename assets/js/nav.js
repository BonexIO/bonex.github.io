const anchorArray = [
  0,
  $("#product").position().top,
  $("#advantages").position().top,
  $("#roadmap").position().top,
]

function changeActiveMenuItem (index) {
  $('.nav-menu__list li').removeClass('active')  
  $(".nav-menu__list li").eq(index).addClass('active');
}

$(document).ready(function () { 

  $('body').on('click', '.mobile-menu__toggle', () => {
    $('.nav-menu').fadeToggle()
  });
  
  $('body').on('click', '.nav-menu__list li', () => {
    $('.nav-menu').fadeToggle()
  });
  
});

$(document).on( 'scroll', function(){
  let scrollPos = $(document).scrollTop();

  if (scrollPos >= anchorArray[1] && scrollPos < anchorArray[2]) {
    changeActiveMenuItem(1)
  } else if (scrollPos >= anchorArray[2] && scrollPos < anchorArray[3]) {
    changeActiveMenuItem(2)  
  } else if (scrollPos >= anchorArray[3]) {
    changeActiveMenuItem(3)  
  } else {
    changeActiveMenuItem(0)  
  }

});

