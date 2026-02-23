/**
 * loop.js
 * The 'state' is passed in from main.js so we can read mouse data.
 */
export function startLoop(ctx, state) {
    
    function render() {
        // 1. Clear the screen
        ctx.fillStyle = 'rgba(5, 5, 5, 0.15)';
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        // 2. Use the 'state' that was passed in
        // If the mouse moves, state.input.normalizedX changes, 
        // which makes the speed change!
        const time = Date.now() * 0.002;
        const speed = 1 + (state.input.normalizedX * 10);
        const pulse = Math.sin(time * speed);
        const radius = 40 + (pulse * 20);

        // 3. Draw the shape
        ctx.beginPath();
        ctx.arc(window.innerWidth / 2, window.innerHeight / 2, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.stroke();

        // 4. Keep the loop going
        requestAnimationFrame(render);
    }

    // Start the first frame
    render();
}