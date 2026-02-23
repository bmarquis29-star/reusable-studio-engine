/**
 * setupCanvas.js
 * Job: Handles HiDPI (Retina) scaling and window resizing.
 */

export function initCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    
    // 1. Get the pixel density of the screen (DPR)
    // Most modern screens are 2.0 or higher.
    const dpr = window.devicePixelRatio || 1;

    function resize() {
        // 2. Set the internal resolution (the "real" pixels)
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;

        // 3. Set the visual size (how it looks in CSS)
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        // 4. Scale the context so our coordinates stay easy to work with
        ctx.scale(dpr, dpr);
    }

    // Run the resize logic every time the window changes size
    window.addEventListener('resize', resize);
    
    // Run it once immediately on start
    resize();

    // Send the "context" back to main.js so we can draw on it
    return { ctx };
}