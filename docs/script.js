// ============================================
// STYLE DATABASE
// ============================================
function showToast(message){

const box = document.getElementById("toastBox");

const div = document.createElement("div");
div.className = "toast";
div.innerText = message;

box.appendChild(div);

setTimeout(() => {
div.remove();
}, 3000);

}
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
// ===========================================
function toggleMobileTheme(){

  const menu =
  document.getElementById(
  "mobileThemeOptions"
  );
  
  menu.classList.toggle("show-theme");
  
}
async function sendContact() {

const name =
document.getElementById("contactName").value;

const email =
document.getElementById("contactEmail").value;

const message =
document.getElementById("contactMessage").value;

if(!name || !email || !message){

showToast("Please fill all fields");
return;

}

try{

const res = await fetch(
"https://ike-elite-backend.onrender.com/api/contact",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
email,
message
})
}
);

const data = await res.json();

showToast(data.message || "Message sent");

}catch(err){

console.error(err);

showToast("Failed to send message");

}
}