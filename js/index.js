function startTransition() {
    const poohImage = document.getElementById('poohImage');
    const welcomeContainer = document.querySelector('.welcome-container');

    // Animar Pooh volando hacia arriba
    poohImage.style.animation = 'flyUp 2s ease-in forwards';

    setTimeout(() => {
        // Crear globos que suben
        createBalloons();

        // Redirigir después de la animación
        setTimeout(() => {
            window.location.href = 'invitacion.html';
        }, 3000);
    }, 1000);
}

function createBalloons() {
    const colors = ['balloon-blue', 'balloon-gold', 'balloon-beige', 'balloon-light-blue', 'balloon-cream'];
    const sizes = ['balloon-small', 'balloon-medium', 'balloon-large'];
    const animations = ['balloonRise', 'balloonRiseSlow', 'balloonRiseFast'];
    const durations = ['3s', '4s', '5s', '3.5s', '4.5s'];

    // Crear muchos más globos - 80 globos para cubrir toda la pantalla
    const balloonCount = 80;

    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');

        // Clases aleatorias para color y tamaño
        const colorClass = colors[Math.floor(Math.random() * colors.length)];
        const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
        const animationName = animations[Math.floor(Math.random() * animations.length)];
        const duration = durations[Math.floor(Math.random() * durations.length)];

        balloon.className = `balloon ${colorClass} ${sizeClass}`;

        // Posición horizontal aleatoria (incluso fuera de los bordes para efecto más natural)
        balloon.style.left = (Math.random() * 120 - 10) + 'vw';

        // Delay aleatorio más amplio para que no todos suban al mismo tiempo
        balloon.style.animationDelay = (Math.random() * 4) + 's';

        // Duración y animación aleatoria
        balloon.style.animationName = animationName;
        balloon.style.animationDuration = duration;

        // Rotación inicial aleatoria
        balloon.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

        document.body.appendChild(balloon);
    }

    // Crear una segunda oleada de globos después de 2 segundos
    setTimeout(() => {
        for (let i = 0; i < 40; i++) {
            const balloon = document.createElement('div');

            const colorClass = colors[Math.floor(Math.random() * colors.length)];
            const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
            const animationName = animations[Math.floor(Math.random() * animations.length)];
            const duration = durations[Math.floor(Math.random() * durations.length)];

            balloon.className = `balloon ${colorClass} ${sizeClass}`;
            balloon.style.left = (Math.random() * 120 - 10) + 'vw';
            balloon.style.animationDelay = (Math.random() * 2) + 's';
            balloon.style.animationName = animationName;
            balloon.style.animationDuration = duration;
            balloon.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

            document.body.appendChild(balloon);
        }
    }, 2000);
}