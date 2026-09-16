const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

if (toggle) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });
}
mobileLinks.forEach(link => link.addEventListener('click', () => {
  header.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}));

const loadGsap = () => new Promise(resolve => {
  if (window.gsap && window.ScrollTrigger) return resolve();
  const gsapScript = document.createElement('script');
  gsapScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js';
  gsapScript.onload = () => {
    const st = document.createElement('script');
    st.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js';
    st.onload = resolve;
    document.head.appendChild(st);
  };
  document.head.appendChild(gsapScript);
});

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  loadGsap().then(() => {
    gsap.registerPlugin(ScrollTrigger);

    const intro = gsap.timeline({defaults:{ease:'power3.out'}});
    intro.from('.site-header', {y:-18, opacity:0, duration:.55})
      .from('.hero-title-wrap', {y:38, opacity:0, duration:.75}, '-=.25')
      .from('.hero-media', {scale:1.045, duration:1.15}, '-=.6')
      .from('.hero-meta', {y:12, opacity:0, duration:.45}, '-=.65');

    gsap.utils.toArray('.section-heading, .about-copy, .about-media, .service-row, .project, .process-list li').forEach((el) => {
      gsap.from(el, {
        y:24,
        opacity:0,
        duration:.65,
        ease:'power2.out',
        scrollTrigger:{trigger:el,start:'top 88%',once:true}
      });
    });

    gsap.to('.hero-media img', {
      yPercent:7,
      ease:'none',
      scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}
    });

    gsap.to('.hero-title-wrap', {
      yPercent:-12,
      ease:'none',
      scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}
    });

    ScrollTrigger.refresh();
  });
}
