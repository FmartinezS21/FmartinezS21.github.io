document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const message = card.dataset.message; // Obtener el mensaje desde un atributo data-message en HTML
            if (message) {
                alert(message);
            } else {
                alert('¡Feliz Aniversario! Mensaje predeterminado 💖'); // Mensaje predeterminado si no hay mensaje específico
            }
        });
    });
});

