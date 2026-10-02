/**
 * Custom cursor with smooth trailing animation.
 * Uses requestAnimationFrame for 60fps interpolation.
 */

(function () {
  'use strict';

  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  // Skip on touch devices
  if (window.matchMedia('(hover: none)').matches) {
    cursor.style.display = 'none';
    return;
  }

  let cursorX = -100;
  let cursorY = -100;
  let targetX = -100;
  let targetY = -100;

  // Track mouse position
  document.addEventListener('mousemove', (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
  });

  // Smooth interpolation loop
  function animate() {
    const ease = 0.2;
    cursorX += (targetX - cursorX) * ease;
    cursorY += (targetY - cursorY) * ease;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    requestAnimationFrame(animate);
  }

  animate();

  // Expand cursor on interactive elements
  const interactives = document.querySelectorAll('a, .stack-item, .proj');
  interactives.forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('big'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
  });
})();
