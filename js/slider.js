const config = {
  type: "carousel",
  startAt: 0,
  perView: 1,
  autoplay: 3000 | true,
  breakpoints: ({
    1440: {
      perView: 3
    },
    1024: {
      perView: 3
    },
    768: {
      perView: 2
    }
  })
};

new Glide(".glide", config).mount();