
// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event){

  //wait until images, links, fonts, stylesheets, and js is loaded
  window.addEventListener("load", function(e){

    // Initial GSAP and Register Plugins
    // ----------------------------------------------------------------------------------------------------
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      markers: true,
    });
  
    // Opening .tfi
    // ----------------------------------------------------------------------------------------------------
    const tfiOpening = {
      trigger: ".tfi",
      start: "top 95%",
      end: "top 10%",
      scrub: 1,
    }
    gsap.fromTo(".img-opening-1", { width: '100%', y: '-25%', x: 0 }, { width: '65%', y: 0, x: '-15vw', duration: 1, scrollTrigger: tfiOpening},)
    gsap.fromTo(".img-opening-2", { width: '100%', y: '-25%', x: 0 }, { width: '65%', y: 0, x: '10vw', duration: 1, scrollTrigger: tfiOpening},)
    gsap.fromTo(".img-opening-3", { width: '100%', y: '-25%', x: 0 }, { width: '65%', y: 0, x: '35vw', duration: 1, scrollTrigger: tfiOpening},)

    // Pinned .tfi
    // ----------------------------------------------------------------------------------------------------
    gsap.timeline({
      scrollTrigger: {
        trigger: ".tfi .tfi__inner",
        start: "top",
        end: "+=200%",
        scrub: true,
        pin: ".tfi",
        pinSpacing: true,
        id: "pinning",
      }
    })

    // Shrinking .tfi
    // ----------------------------------------------------------------------------------------------------
    const tfiShrinking = {
      trigger: ".tfi",
      start: "top",
      end: "+=25%",
      scrub: 1,
    }
    gsap.fromTo(".img-opening-1", { width: '65%', x: '-15vw' }, { width: '50%', x: 0, scrollTrigger: tfiShrinking })
    gsap.fromTo(".img-opening-2", { width: '65%', x: '10vw', }, { width: '50%', x: '50%', scrollTrigger: tfiShrinking })
    gsap.fromTo(".img-opening-3", { width: '65%', x: '35vw' }, { width: '50%', x: '100%', scrollTrigger: tfiShrinking })

    gsap.set(".tfi__list__item:nth-of-type(1) p", { visibility: 'visible', height: 'auto', scrollTrigger: tfiShrinking })
    gsap.set(".tfi__list__item:nth-of-type(1) h3", { color: 'var(--primary-500)', scrollTrigger: tfiShrinking })
    gsap.set('.tfi__text', { opacity: 0, y: '10%' })

  
    gsap.timeline({ scrollTrigger: {
      trigger: ".tfi",
      start: "top",
      end: "+=190%",
      scrub: 1,
    }, })
      .to(".tfi__inner", { borderRadius: "32px", width: "1328px", height: "617px", duration: 1 })
      .to([".img-opening-2", ".img-opening-3"], { opacity: 0, duration: 1 }, '-=1')
      .to('.tfi__text', { opacity: 1, y: 0, duration: 1 }, '-=0.5')
      .to([".img-opening-2", ".img-opening-3"], { x: 0 }, '-=0.5')
      .to('.tfi__list__indicator', { top: 'unset', bottom: '0' ,duration: 3 })
      // menujud list ke 2
      .to(".img-opening-1", { opacity: 0, }, '-=2.8')
      .to(".img-opening-2", { opacity: 1, }, '-=2.8')
      .to(".tfi__list__item:nth-of-type(1) h3", { color: 'var(--tertiary-400)'}, '-=2.8')
      .to(".tfi__list__item:nth-of-type(1) p", { visibility: 'hidden', height: '0'}, '-=2.6')
      // menujud list ke 3
      
      .to(".tfi__list__item:nth-of-type(2) h3", { color: 'var(--primary-500)'}, '-=2.6')
      .to(".tfi__list__item:nth-of-type(2) p", { visibility: 'visible', height: '100%', duration: 0.5 }, '-=2.4')
      // reset list ke 2
      .to(".tfi__list__item:nth-of-type(2) h3", { color: 'var(--tertiary-500)'}, '-=1')
      .to(".tfi__list__item:nth-of-type(2) p", { visibility: 'hidden', height: 0}, '-=1')
      // masuk list ke 3
      .to(".img-opening-2", { opacity: 0, }, '-=1')
      .to(".img-opening-3", { opacity: 1, }, '-=1')
      .to(".tfi__list__item:nth-of-type(3) h3", { color: 'var(--primary-500)'}, '-=0.8')
      .to(".tfi__list__item:nth-of-type(3) p", { visibility: 'visible', height: '100%'}, '-=0.8')


  }, false);
  
});