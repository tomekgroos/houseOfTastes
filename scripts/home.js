 const container = document.querySelector(".container");
    const about = document.querySelector(".about");
    const recipes = document.querySelector(".recipes");
    const gallery = document.querySelector(".gallery");
    const title = document.querySelector(".title-text");

    setTimeout(() => {
      about.classList.remove("about");
      recipes.classList.remove("recipes");
      gallery.classList.remove("gallery");
      title.classList.remove("title-text");
      container.classList.remove("container");

      about.classList.add("aboutShow");
      recipes.classList.add("recipesShow");
      gallery.classList.add("galleryShow");
      title.classList.add("title-textShow");
      container.classList.add("containerShow");
    }, 1800);

    // adjusting elements on smaller screens in landscape mode

    if (
      window.innerWidth < 1080 &&
      window.matchMedia("(orientation:landscape)").matches
    ) {
      document.getElementById("title-text-adjust").style.top = "-35vh";
      document.getElementById("recipes-adjust").style.marginTop = "26vh";
    }

    // reload page on orientationchange (mobile)

    window.onorientationchange = () =>{
        window.location.reload();
    }