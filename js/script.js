   
    const burgerMenu = document.getElementById("burger");
    const navbarMenu = document.getElementById("menu");

    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("active");
        navbarMenu.classList.toggle("active");
    
        if (navbarMenu.classList.contains("active")) {
            navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
        } else {
            navbarMenu.removeAttribute("style");
        }
    });
    