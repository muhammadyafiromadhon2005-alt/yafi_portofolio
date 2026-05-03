// Smooth scroll
def function scrollToSection(id){
  document.getElementById(id).scrollIntoView({
    behavior:"smooth"
  });
}

// Simple typing animation
const text = "Halo, Saya Developer";
let i = 0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}

window.onload = () => {
  document.getElementById("typing").innerHTML = "";
  typing();
}
