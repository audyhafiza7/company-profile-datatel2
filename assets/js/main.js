// assets/js/main.js
document.addEventListener("DOMContentLoaded", function() {
  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', function(){
      mainNav.classList.toggle('open');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(!href || href === '#') return;
      var target = document.querySelector(href);
      if(target){
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 72,
          behavior: 'smooth'
        });
        // close mobile nav if open
        if(mainNav && mainNav.classList.contains('open')) mainNav.classList.remove('open');
      }
    });
  });

  // Simple contact submit (no backend) — show small confirmation
  var form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var btn = form.querySelector('button');
      var old = btn.innerHTML;
      btn.innerHTML = 'Sending...';
      btn.disabled = true;
      setTimeout(function(){
        btn.innerHTML = old;
        btn.disabled = false;
        alert('Thank you! Your message has been recorded (demo). We will contact you soon.');
        form.reset();
      }, 900);
    });
  }
});
