$(window).scroll(function () {
    if ($(window).scrollTop() > 20) {
      $('#navBar').addClass('floatingNav');
    } else {
      $('#navBar').removeClass('floatingNav');
    }
  });
