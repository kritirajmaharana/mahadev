
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

$('.bb').ripples({
  resolution: 512,
  dropRadius: 20,
  perturbance: 0.04,

})

gsap.from(".nlink", {
    stagger: .1,
    y:20,
    duration: 2,
    ease: Power3,
    opacity: 0,

})
Shery.textAnimate(".heading h1" , {
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anim2" ,{
    y:30,
    stagger: .3,
    opacity:0,
    ease:Power2,
    duration:1,
})

  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet(".img" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 2,
  });

