 
    const about = document.querySelector(".about");
    const recipes = document.querySelector(".recipes");
    const gallery = document.querySelector(".gallery");
    const title = document.querySelector(".title-text");
    const innerButtonContainer = document.querySelector(".innerButtonContainer");

    setTimeout(() => {
 
      title.classList.remove("title-text");
      innerButtonContainer.classList.remove("innerButtonContainer");
      

    
      title.classList.add("title-textShow");
      innerButtonContainer.classList.add("innerButtonContainerShow");
          }, 1400);



   