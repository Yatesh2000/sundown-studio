gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();




function page3Animation(){
    var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")

elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "initial"
})


elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})


var elems = document.querySelectorAll(".elem")

elems.forEach(function(val){
    val.addEventListener('mouseenter', function(){
        var image =  val.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})
}

function page4Animation(){

var h3 = document.querySelectorAll("#left4-content h3");
var right = document.querySelector("#page4-right");
var para = document.querySelector("#para");

h3.forEach(function(val){
    val.addEventListener("click", function(){
        // First, change the color of all h3 elements to gray
        h3.forEach(function(dets){
            dets.style.color = "gray";
            dets.style.borderLeft = "5px solid gray";
        });

        // Then, change the color of the clicked h3 element to white
        var details = val.getAttribute('data-value');
        var images = val.getAttribute("data-image");
        right.style.backgroundImage = `url(${images})`;
        para.innerHTML = details;
        val.style.color = "white";
        val.style.borderLeft = "5px solid red";
    });
});



}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
      });
}



function changeColor(element) {
    // Getting all h3 elements
    var h3 = document.getElementsByTagName("#left-content h3");

    // Looping through all h3 elements to change their color
    for (var i = 0; i < h3.length; i++) {
        // If the clicked element matches the current h3 element, change its color to white
        if (h3[i] === element) {
            h3[i].style.color = "white";
        } else {
            // If the current h3 element is not the clicked one, change its color to gray
            h3[i].style.color = "gray";
        }
    }
}




swiperAnimation()
page4Animation()
page3Animation()




function gsap3Animation(){
    gsap.from("#elem-container .elem:nth-child(1) h2",{
        y: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".elem",
            scroller: "#main",
            start: "top 80%",
        }
    })
    
    gsap.from("#elem-container .elem:nth-child(2) h2",{
        y: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".elem",
            scroller: "#main",
            start: "top 70%",
        }
        
    })
    
    gsap.from("#elem-container .elem:nth-child(3) h2",{
        y: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".elem",
            scroller: "#main",
            start: "top 60%",
        }
    })
    
    gsap.from("#elem-container .elem:nth-child(4) h2",{
        y: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".elem",
            scroller: "#main",
            start: "top 50%",
        }
    })
    
    gsap.from("#elem-container .elem:nth-child(5) h2",{
        y: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".elem",
            scroller: "#main",
            start: "top 40%",
        }
    })
    
    gsap.from("#elem-container .elem:nth-child(6) h2",{
        y: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".elem",
            scroller: "#main",
            start: "top 10%",
        }
    })
    
    gsap.from("#elem-container .elem:nth-child(7) h2",{
        y: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".elem",
            scroller: "#main",
            start: "top 0%",
        }
    })
}

gsap3Animation()



var loader = document.querySelector("#loader")
var loaderH1 = document.querySelector("#loader h1")

setTimeout(() => {
    loader.style.top = "-100%"
}, 4000);

// setInterval(() => {
//     loaderH1.innerHTML = "ENVIRONMENTS"

// }, 1000);

// setInterval(() => {
//     loaderH1.innerHTML = "EXPERIMENTS"

// }, 2000);


// setInterval(() => {
//     loaderH1.innerHTML = "CONTENTS"

// }, 3000);


var circle = document.querySelector(" #circle")

var swiping = document.querySelector(".swiper")
console.log(swiping)






swiping.addEventListener("mouseenter", function(){
   circle.style.scale = 1
   circle.style.opacity = 1



})

swiping.addEventListener("mouseleave", function(){
  
    circle.style.scale = 0
   circle.style.scale = 0



})



swiping.addEventListener("mousemove", function(dets){
    // gsap.from("#circle",{
    //     x: dets.x,
    //     y: dets.y ,
    // })

    circle.style.left = dets.x+"px"
    circle.style.top = dets.y+"px"


})
