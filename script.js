document.getElementById('mobile-menu').addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('booking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Prenotazione inviata con successo!');
});
