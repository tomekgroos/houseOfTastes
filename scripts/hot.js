 // function added because of view problem on chrome mobile (viewport problem)

      window.addEventListener("resize", () => {
        let mh = window.innerHeight * 0.01;

        document.documentElement.style.setProperty("--mh", `${mh}px`);
      });