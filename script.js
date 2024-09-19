const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//Page animation

function firstPageAni(){
  var t1= gsap.timeline();

  t1.from("#nav",{
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut
  })
    .to(".boundingelem",{
      y: 0,
      duration: 2,
      ease: Expo.easeInOut,
      delay: -1,
      stagger: .2
    })
    .from("#herofooter",{
      y: '-10',
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut
    })
}

//Cursor style

var newcrsr = document.querySelector("body")
var crsr = document.querySelector("#minicircle")

newcrsr.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+"px"
})

firstPageAni();

//Image hovering

document.querySelectorAll(".element").forEach(function(elem){

  var rotate = 0;
  var diffrot = 0;
  elem.addEventListener("mousemove",function(dets){
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX-rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"),{
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20,20,diffrot),
    });
  });
});

document.querySelectorAll(".element").forEach(function(elem){
  elem.addEventListener("mouseleave",function(dets){
    gsap.to(elem.querySelector("img"),{
      opacity: 0,
      duration: 0.5,
      
    });
  });
});