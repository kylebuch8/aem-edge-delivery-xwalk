import { moveInstrumentation } from '../../scripts/scripts.js';
import '@rhds/elements/rh-tile/rh-tile.js';

export default function decorate(block) {
  const tile = document.createElement('rh-tile');

  if (block.classList.contains('compact')) {
    tile.setAttribute('compact', '');
  }

  [...block.children].forEach((child) => {
    moveInstrumentation(child, tile);
    while (child.firstElementChild.firstElementChild) {
      tile.append(child.firstElementChild.firstElementChild);
    }

    if (tile.querySelector('h1, h2, h3, h4, h5, h6')) {
      tile.querySelector('h1, h2, h3, h4, h5, h6').setAttribute('slot', 'headline');
    }
  });

  block.textContent = '';
  block.append(tile);
}
