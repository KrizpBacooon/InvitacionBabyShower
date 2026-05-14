// Cuenta regresiva
function updateCountdown() {
    // EDITABLE: Cambiar la fecha del evento aquí (año, mes-1, día, hora, minuto)
    const eventDate = new Date(2026, 5, 20, 15, 30, 0); // 20 de junio 2026, 3:30 PM
    const now = new Date();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Control de música
let isPlaying = false;
const music = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicToggle.textContent = '♪';
        musicToggle.style.opacity = '0.8';
    } else {
        music.play().catch(e => {
            console.log('No se pudo reproducir la música automáticamente');
        });
        musicToggle.textContent = '⏸';
        musicToggle.style.opacity = '1';
    }
    isPlaying = !isPlaying;
}

// Intentar reproducir música automáticamente
window.addEventListener('DOMContentLoaded', () => {
    music.play().then(() => {
        isPlaying = true;
        musicToggle.textContent = '⏸';
        musicToggle.style.opacity = '1';
    }).catch(e => {
        console.log('Reproducción automática bloqueada por el navegador');
        musicToggle.textContent = '♪';
        musicToggle.style.opacity = '0.8';
    });
});

// También intentar cuando se hace clic en cualquier parte de la página
document.addEventListener('click', () => {
    if (!isPlaying) {
        music.play().then(() => {
            isPlaying = true;
            musicToggle.textContent = '⏸';
            musicToggle.style.opacity = '1';
        }).catch(e => {
            console.log('No se pudo reproducir la música');
        });
    }
}, { once: true });

// Actualizar cuenta regresiva cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);

// Animación suave al cargar
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});