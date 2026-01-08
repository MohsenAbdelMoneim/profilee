// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Dark Mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.onclick = () => {
  document.documentElement.classList.toggle("dark");
  themeToggle.textContent = document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
};

// AR/EN Switch
const langBtn = document.getElementById("langToggle");
let currentLang = "en";
langBtn.onclick = () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  langBtn.textContent = currentLang === "en" ? "AR" : "EN";
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[currentLang];
    el.style.direction = currentLang === "ar" ? "rtl" : "ltr";
  });
};

// Skill Cards
document.querySelectorAll(".skill").forEach(skill => {
  skill.className += " p-6 text-center rounded-xl shadow bg-gray-50 dark:bg-gray-900 hover:-translate-y-2 hover:shadow-xl transition duration-300";
});

// Project Cards
document.querySelectorAll(".project-card").forEach(card => {
  card.className += " rounded-xl overflow-hidden shadow hover:shadow-2xl transition";
  card.querySelector("img").className = "h-32 w-full object-cover hover:scale-110 transition duration-500";
  card.querySelector("h4").className = "font-semibold text-lg mb-2";
  card.querySelector("p").className = "text-sm text-gray-500 mb-3";
  card.querySelectorAll("a").forEach(a=>{
    a.className="text-indigo-500 mr-4 hover:underline";
  });
});

// Contact Form EmailJS
emailjs.init("YOUR_PUBLIC_KEY");
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
  .then(()=>{ alert("Message sent! 🚀"); this.reset(); },()=>{ alert("Error ❌"); });
});

// Eng Mohsen Lines color animation
const topLine = document.getElementById("top-line");
const bottomLine = document.getElementById("bottom-line");
const colors = [
  "from-indigo-500 via-pink-500 to-yellow-500",
  "from-green-500 via-blue-500 to-purple-500",
  "from-red-500 via-yellow-500 to-pink-500",
];
let index = 0;
setInterval(() => {
  topLine.className = `w-20 h-1 mb-1 rounded animate-pulse bg-gradient-to-r ${colors[index]}`;
  bottomLine.className = `w-20 h-1 mt-1 rounded animate-pulse bg-gradient-to-r ${colors[index]}`;
  index = (index + 1) % colors.length;
}, 1200);

// ===== Typing Effect Loop Hero Name =====
function typeLoop(elementId, text, speed=120, pause=1000){
  const element = document.getElementById(elementId);
  let i = 0;
  let forward = true;

  function type(){
    if(forward){
      if(i < text.length){
        element.textContent += text[i];
        i++;
        setTimeout(type, speed);
      } else {
        forward = false;
        setTimeout(type, pause);
      }
    } else {
      if(i > 0){
        element.textContent = text.slice(0, i-1);
        i--;
        setTimeout(type, speed/2);
      } else {
        forward = true;
        setTimeout(type, pause);
      }
    }
  }
  type();
}

typeLoop("name-typing", "Mohsen Abdel Moneim", 120, 1000);
