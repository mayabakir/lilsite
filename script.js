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