// ============================================
// STYLE DATABASE
// ============================================

// ============================================
// STYLE IMAGES
// ============================================
function toggleMobileDropdown(id){

  const dropdown =
  document.getElementById(id);
  
  dropdown.classList.toggle("show-mobile-drop");
  
  }
// ============================================
// MOBILE MENU
// ============================================

function toggleMenu(){

  const menu =
  document.getElementById("mobileMenu");

  if(menu){
    menu.classList.toggle("show");
  }

}

// ============================================
// THEME SWITCHER
// ============================================

function toggleThemeMenu(){

  const menu =
  document.getElementById("themeOptions");

  if(menu){
    menu.classList.toggle("show-theme");
  }

}

function setTheme(mode){

  document.body.className = mode;

  localStorage.setItem("theme",mode);

  const menu =
  document.getElementById("themeOptions");

  if(menu){
    menu.classList.remove("show-theme");
  }

}

// ============================================
// LOAD SAVED THEME
// ============================================

document.addEventListener(
"DOMContentLoaded",
function(){

  const savedTheme =
  localStorage.getItem("theme") || "light";

  document.body.className =
  savedTheme;

}
);

// ============================================
// NAVBAR DROPDOWN
// ============================================

document.addEventListener(
"DOMContentLoaded",
function(){

  document.querySelectorAll(
  ".nav-drop-btn"
  ).forEach(btn=>{

    btn.addEventListener(
    "click",
    function(){

      this.parentElement
      .classList.toggle("active");

    });

  });

}
);

// ============================================
// ACCORDIONS
// ============================================

document.addEventListener(
"DOMContentLoaded",
function(){

  const accordions =
  document.querySelectorAll(
  ".accordion button"
  );

  accordions.forEach(btn=>{

    btn.addEventListener(
    "click",
    ()=>{

      btn.nextElementSibling
      .classList.toggle("show");

    });

  });

}
);

// ============================================
// SLIDER
// ============================================

document.addEventListener(
"DOMContentLoaded",
function(){

  const slides =
  document.querySelectorAll(".slide");

  if(slides.length === 0) return;

  let currentSlide = 0;

  function showSlides(){

    slides.forEach(slide=>{
      slide.classList.remove("active");
    });

    currentSlide++;

    if(currentSlide >= slides.length){
      currentSlide = 0;
    }

    slides[currentSlide]
    .classList.add("active");

  }

  showSlides();

  setInterval(showSlides,3000);

}
);
function toggleMobileTheme(){

  const menu =
  document.getElementById(
  "mobileThemeOptions"
  );
  
  menu.classList.toggle("show-theme");
  
}
