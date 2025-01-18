document.getElementById('contactButton').addEventListener('click', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm.classList.contains('hidden')) {
        contactForm.classList.remove('hidden');
    } else {
        contactForm.classList.add('hidden');
    }
});
