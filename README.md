🚗 Scroll Drive Animation – GSAP Project

A smooth scroll-driven animation built using GSAP and ScrollTrigger.

As the user scrolls:

The vehicle drives from left to right

Headline letters appear one by one

Progress bar fills smoothly

Metrics fade in with staggered animation

Custom scrollbar replaces default scrollbar

✨ Features

Scroll-based vehicle animation

Dynamic letter splitting animation

GSAP ScrollTrigger pinning

Custom scroll progress bar

Smooth stagger effects

Performance optimized (transform + opacity only)

Sticky hero section

🛠 Technologies Used

HTML5

CSS3

JavaScript

GSAP 3

GSAP ScrollTrigger

🚀 How It Works
1️⃣ ScrollTrigger Timeline

A single GSAP timeline controls:

Vehicle movement

Text reveal

Progress bar animation

Metric card animations

2️⃣ Letter Animation

Headline text is dynamically split into individual <span> elements using JavaScript, then animated with staggered effects.

3️⃣ Performance Optimization

Uses transform instead of left/width

Uses will-change

Uses scrub for smooth scroll interpolation

Avoids scroll event listeners

📂 Project Structure
/project-folder
│
├── index.html
├── style.css
├── script.js
├── assets/
│   └── vehicle.png
└── README.md
▶️ How to Run

Download or clone the repository

Open index.html in your browser

Scroll to see the animation

No build tools required.

📈 Future Improvements

Add smooth scroll library (Lenis)

Add vehicle motion blur

Add tire rotation animation

Add responsive mobile adjustments

Add cinematic acceleration easing

📸 Preview

Scroll down to watch the vehicle drive and text reveal animation in sync.

👨‍💻 Author

Amar Tomar
Frontend Developer | GSAP Animation Enthusiast
