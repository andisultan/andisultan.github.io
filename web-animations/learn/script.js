// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event){

  console.log("DOM loaded");

  //wait until images, links, fonts, stylesheets, and js is loaded
  window.addEventListener("load", function(e){

    gsap.registerPlugin(ScrollTrigger);


    const sectionThreeImages = this.document.querySelectorAll('.section-three .img');
    const sectionThreeCards = this.document.querySelectorAll('.section-three .card');

    function sectionThreeItemActive(index) {
      sectionThreeImages.forEach(image => image.classList.remove('z-1'));
      sectionThreeCards.forEach(card => card.classList.remove('z-1'));
      sectionThreeImages[index].classList.add('z-1');
      sectionThreeCards[index].classList.add('z-1');
    }

    sectionThreeCards.forEach((image, index) => {
      ScrollTrigger.create({
        trigger: image,
        start: 'top center',
        end: 'bottom center',
        onToggle: (isActive) => {
          if (isActive) {
            sectionThreeItemActive(index)
          }
        },
      })
    })

    ScrollTrigger.create({
      trigger: ".section-three",
      start: "top",
      end: "+=600px",
      pin: ".section-three .pinned",
      // pinSpacing: true,
      actions: "play none none none",
    })
    

    // const contents = gsap.utils.toArray('.content:not(:first-child)');
    // const allContents = gsap.utils.toArray('.content');
    // const boxs = gsap.utils.toArray('.box:not(:first-child)');
    // const allBoxs = gsap.utils.toArray('.box');
    // gsap.set(boxs, { yPercent: 101 })
    // // gsap.set(allContents, { yPercent: 101 })

    // const heighContent = 100 * contents.length 

    // ScrollTrigger.create({
    //   trigger: ".section--three .section__inner",
    //   start: "top",
    //   end: "+=" + heighContent + "%",
    //   pin: ".section--three .section__inner",
    //   pinSpacing: true,
    // })

    // contents.forEach((detail, index)=> {
    //   let headline = detail.querySelector("h1")
    //   let animations = gsap.timeline()
    //      .to([boxs[index], contents[index]], {yPercent:0})
    //      .set([allBoxs[index], allContents[index]], {autoAlpha:0})
    //   ScrollTrigger.create({
    //     trigger: headline,
    //     start:"top 80%",
		//     end:"top 50%",
    //     animation: animations,
    //     scrub: true,
    //   })
    // })

    console.log("window loaded");
  }, false);
  
});