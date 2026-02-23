Context Block
I am building a modular Canvas engine.

setupCanvas.js: Handles HiDPI and resizing.

loop.js: Handles the requestAnimationFrame and drawing.

input.js: Captures raw signals (mouse/touch).

main.js: The orchestrator.
Rule: No libraries. Annotate every logic change in plain language.

Template: Debugging
"The signal from input.js is reaching main.js but the behavior in loop.js isn't updating. Check the state reference and suggest a fix using vanilla JS."