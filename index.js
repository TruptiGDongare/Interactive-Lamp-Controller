document.addEventListener('DOMContentLoaded', () => {
    const brightnessSlider = document.getElementById('brightness');
    const lampBody = document.querySelector('.lamp-body');
    const lampLight = document.querySelector('.lamp-light');
    const lampInner = document.querySelector('.lamp-inner');

    function updateLamp(brightness) {
        const value = brightness / 100;
        
        // Update lamp glow
        lampBody.style.boxShadow = `0 0 ${brightness}px ${brightness/2}px var(--lamp-shadow)`;
        
        // Update inner light
        lampInner.style.opacity = 0.5 + (value * 0.5);
        
        // Update light beam
        lampLight.style.opacity = value * 0.4;
    }

    brightnessSlider.addEventListener('input', (e) => {
        updateLamp(e.target.value);
    });

    // Initialize lamp with default brightness
    updateLamp(brightnessSlider.value);
});