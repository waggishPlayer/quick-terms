document.addEventListener('DOMContentLoaded', function() {
    const pauseBtn = document.getElementById('pause-btn');
    const pauseIcon = document.getElementById('pause-icon');
    const playIcon = document.getElementById('play-icon');

    pauseBtn.addEventListener('click', function() {
        // Toggle icons
        pauseIcon.classList.toggle('hidden');
        playIcon.classList.toggle('hidden');
        
        // Your existing pause/play logic here
    });
}); 