document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ Custom.js betöltve!");
  const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, img, iframe');
  elements.forEach(el => el.classList.add('fade-in'));

  const appearOnScroll = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', appearOnScroll);
  window.addEventListener('load', appearOnScroll);
});
