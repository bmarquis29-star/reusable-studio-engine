import { initCanvas } from './src/canvas/setupCanvas.js';
import { startLoop } from './src/canvas/loop.js';
import { listenToInput } from './src/input/input.js';

// Central state to share data between input and drawing
const state = {
    input: { x: 0, y: 0, normalizedX: 0 }
};

const canvas = document.querySelector('#stage');
const { ctx } = initCanvas(canvas);

listenToInput(state);
startLoop(ctx, state);