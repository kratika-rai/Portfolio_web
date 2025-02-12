
    var typed = new Typed('#element', {
        strings: ['Frontend Developer'],
        typeSpeed: 50,
    });

    // Fade-in effect on scroll
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible");
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });


  