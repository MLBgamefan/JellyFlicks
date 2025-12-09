// =================== JellyFlicks Theme JS ===================
// Dynamic enhancements for Jellyfin UI

document.addEventListener('DOMContentLoaded', () => {
    console.log('JellyFlicks theme loaded');

    // Dynamic footer text
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.textContent = "JellyFlicks v1.0 - Enjoy your movies!";
    }

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: subtle hover effect for cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
