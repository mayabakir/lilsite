const circle = document.querySelector('.circle');
const name = document.querySelector('.name');

// Position the circle above the name
function positionCircle() {
    const nameRect = name.getBoundingClientRect();
    const circleY = nameRect.top - 40; // Increased distance above the name
    circle.style.top = `${circleY}px`;
}

// Add gentle bounce animation
function bounce() {
    requestAnimationFrame(() => {
        circle.style.transform = 'translateX(-50%) translateY(-15px)';
        setTimeout(() => {
            circle.style.transform = 'translateX(-50%) translateY(0px)';
        }, 400);
    });
}

// Initial position and start animation
document.addEventListener('DOMContentLoaded', () => {
    positionCircle();
    setInterval(bounce, 800);
});

// Maintain position on resize
window.addEventListener('resize', positionCircle);

// Add click handlers for text animation
document.addEventListener('DOMContentLoaded', () => {
    const clickableElements = document.querySelectorAll('.thoughts a, .contact a');
    
    clickableElements.forEach(element => {
        element.addEventListener('mousedown', function() {
            this.style.color = 'rgba(255, 172, 172, 1)';
            this.style.transform = 'rotate(2deg) scale(1.02)';
        });
        
        element.addEventListener('mouseup', function() {
            this.style.color = '';
            this.style.transform = '';
        });
        
        // Reset on mouse leave in case mouseup happens outside
        element.addEventListener('mouseleave', function() {
            this.style.color = '';
            this.style.transform = '';
        });
    });
});

// Add music player functionality
document.addEventListener('DOMContentLoaded', () => {
    const violinLink = document.getElementById('violin-link');
    const audioFiles = [
        'music/song1.mp3',
        'music/song2.mp3',
        'music/song3.mp3',
        'music/song4.mp3',
        'music/song5.mp3'
    ];
    
    let currentTrack = 0;
    let audio = new Audio();
    let isPlaying = false;
    
    violinLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (!isPlaying) {
            // Start playing
            audio.src = audioFiles[currentTrack];
            audio.play()
                .catch(error => {
                    console.error('Error playing audio:', error);
                    // Try to handle autoplay restrictions
                    if (error.name === 'NotAllowedError') {
                        alert('Please interact with the page first to enable audio playback');
                    }
                });
            isPlaying = true;
            violinLink.textContent = '🎵'; // Change to music note when playing
        } else {
            // Stop playing
            audio.pause();
            isPlaying = false;
            violinLink.textContent = '🎻'; // Change back to violin when stopped
        }
    });
    
    // When a song ends, play the next one
    audio.addEventListener('ended', function() {
        currentTrack = (currentTrack + 1) % audioFiles.length;
        audio.src = audioFiles[currentTrack];
        audio.play();
    });
}); 