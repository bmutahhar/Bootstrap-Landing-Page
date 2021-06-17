// Sticky navigation

$(window).scroll(function () {
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    console.log("stickyyyyy");
    $(".navbar").addClass("sticky");
  } else {
    console.log("not stickkyyyyy");
    $(".navbar").removeClass("sticky");
  }
});

// Counter Animation

let nCount = function (selector) {
  $(selector).each(function () {
    $(this).animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 2500,
        easing: "swing",
        step: function (value) {
          $(this).text(Math.ceil(value));
        },
      }
    );
  });
};

let a = 0;
$(window).scroll(function () {
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});
