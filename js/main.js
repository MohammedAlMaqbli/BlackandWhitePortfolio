document.querySelector("#toggle").addEventListener("click", e => {
  document.querySelector("#resize").classList.toggle("active");
});
document.querySelector("#resize ul li a").addEventListener("click", e => {
  document.querySelector("#resize").classList.toggle("active");
});
document.querySelector(".close-btn").addEventListener("click", e => {
  document.querySelector("#resize").classList.toggle("active");
});

// nav animations begin

TweenMax.from("#brand", 1, {
  delay: 0.4,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(
  "#menu li a",
  1,
  {
    delay: 0.4,
    opacity: 0,
    ease: Expo.easeInOut
  },
  0.1
);
new WOW().init();
// nav animations end

//work slider
var sickPrimary = {
  autoplay: true,
  autoplaySpeed: 2400,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 1800,
  cssEase: "cubic-bezier(.84, 0, .08, .99)",
  asNavFor: ".text-slider",
  centerMode: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next")
};

var sickSecondary = {
  autoplay: true,
  autoplaySpeed: 2400,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1800,
  cssEase: "cubic-bezier(.84, 0, .08, .99)",
  asNavFor: ".image-slider",
  prevArrow: $(".prev"),
  nextArrow: $(".next")
};

$(".image-slider").slick(sickPrimary);
$(".text-slider").slick(sickSecondary);
