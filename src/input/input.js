export function listenToInput(state) {
    window.addEventListener('mousemove', (e) => {
        state.input.x = e.clientX;
        state.input.y = e.clientY;
        // Normalize X position to a 0.0 - 1.0 range
        state.input.normalizedX = e.clientX / window.innerWidth;
    });
}