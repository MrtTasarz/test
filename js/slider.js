
const config = {
  type: "carousel",
  startAt: 0,
  perView: 3,
  autoplay: 3000 | true,
  breakpoints: {
    320: { perView: 1 },
    480: { perView: 1 },
    768: { perView: 2 },

  }
};

new Glide(".glide", config).mount();