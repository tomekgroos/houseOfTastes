
// function added because of view problem on chrome mobile (viewport problem)

window.addEventListener("resize", function () {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty("--mh", `${vh}px`);
});


