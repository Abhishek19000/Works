function loading(){
    let tl =gsap.timeline()

tl.to(".yellow1",{
    top:"-100%",
    delay:0.5,
    duration:0.5,
    ease:"expo .out",
})

tl.from(".yellow2",{
    top:"100%",
    delay:0.5,
    duration:0.5,
    ease:"expo .out",
},"anim")

tl.to(".loader h1",{
    color:"black",
    delay:0.6,
    duration:0.5
},"anim")

tl.to(".loader",{
    display:"none",
    opacity:0
})
}
loading();

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
    
    document.querySelector(".footer h2").addEventListener("click", () => {
        // console.log("hello");
        scroll.scrollTo(0);
    })
    
    var elems=document.querySelectorAll('.elem');
    var page2=document.querySelector(".page2");
    
    elems.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            var bgimg=elem.getAttribute("data-img")
            // console.log(bgimg)
            page2.style.backgroundImage=`url(${bgimg})`
        })
    })
}

loco();

const instaLink = document.querySelector(".foot");
  instaLink.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/abhishek19000/"; // Replace with your actual username
  });