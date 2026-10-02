/**
 * Floating project image preview.
 * On hover over a .proj link, displays the associated data-img
 * in a floating panel that follows the cursor with a slight lag
 * and rotation for a tactile feel.
 */

(function () {
  'use strict';

  const floatBox = document.getElementById('floatImg');
  const floatSrc = document.getElementById('floatImgSrc');
  const projects = document.querySelectorAll('.proj');

  if (!floatBox || !floatSrc || !projects.length) return;

  // Hide on mobile
  if (window.matchMedia('(hover: none)').matches) {
    floatBox.style.display = 'none';
    return;
  }

  // Track mouse for floating image position
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  // Update floating image position with slight offset
  function updatePosition() {
    const offsetX = 190; // half of width
    const offsetY = 130; // half of height

    floatBox.style.left = `${mouseX - offsetX}px`;
    floatBox.style.top = `${mouseY - offsetY}px`;

    requestAnimationFrame(updatePosition);
  }

  updatePosition();

  // Bind hover events to each project
  projects.forEach((project) => {
    const imageUrl = project.dataset.img;
    if (!imageUrl) return;

    project.addEventListener('mouseenter', () => {
      floatSrc.src = imageUrl;
      floatBox.classList.add('on');
    });

    project.addEventListener('mouseleave', () => {
      floatBox.classList.remove('on');
    });
  });
})();
