import { moveInstrumentation } from '../../scripts/scripts.js';

import '@rhds/elements/rh-tile/rh-tile.js';

export default function decorate(block) {
  const tile = document.createElement('rh-tile');

  [...block.children].forEach((child) => {
    moveInstrumentation(child, tile);
    while (child.firstElementChild.firstElementChild) {
      tile.append(child.firstElementChild.firstElementChild);
    }
  });

  block.append(tile);
}
