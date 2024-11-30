window.addEventListener("scroll", function () {
    const socialIcons = document.querySelector(".social-icons");
    const scrollTrigger = 200; 
  
    if (window.scrollY >= scrollTrigger) {
      socialIcons.classList.add("sticky-icons");
    } else {
      socialIcons.classList.remove("sticky-icons");
    }
  });
  