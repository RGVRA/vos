// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust for fixed navbar height
            behavior: 'smooth'
        });
    });
    // JavaScript for Blurry Scroll Effect
    window.addEventListener("scroll", function() {
    const homeSection = document.getElementById("home");
    const blurThreshold = homeSection.offsetHeight / 2; // Adjust threshold as needed

    // Apply or remove blur effect based on scroll position
    if (window.scrollY > blurThreshold) {
        homeSection.classList.add("blur");
    } else {
        homeSection.classList.remove("blur");
    }
});
});