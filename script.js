gsap.registerPlugin(ScrollTrigger);

const vehicle = document.getElementById("vehicle");
const progressBar = document.getElementById("progressBar");
const headline = document.getElementById("headline");

// Split headline letters dynamically
const splitText = headline.innerText.split("");
headline.innerHTML = "";
splitText.forEach(letter=>{
  const span = document.createElement("span");
  span.textContent = letter;
  headline.appendChild(span);
});
const letters = headline.querySelectorAll("span");
const timeline = gsap.timeline({
  scrollTrigger:{
    trigger:".hero-wrapper",
    start:"top top",
    end:"bottom top",
    scrub:1.2,
    pin:".hero-stage",
    anticipatePin:1
  }
});
// Letters appear one-by-one DURING movement
timeline.from(letters,{
  opacity:0,
  y:0,
  stagger:{
    each:0.05
  },
  ease:"power2.out"
},0.1);

// Vehicle drives across
timeline.to(vehicle,{
  x: () => window.innerWidth + 330,
  ease:"none"
},0);

// Progress bar fills
timeline.from(progressBar,{
  width:"100%",
  ease:"none"
},0);

// Progress bar fills
timeline.to(progressBar,{
  width:"0%",
  ease:"none"
},0);


// Metrics reveal
timeline.to(".metric-card",{
  opacity:1,
  y:0,
  stagger:0.1,
  ease:"power2.out"
},0.3);