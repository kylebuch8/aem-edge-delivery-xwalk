import { moveInstrumentation } from '../../scripts/scripts.js';
import '@rhds/elements/rh-tag/rh-tag.js';

export default function decorate(block) {
  const tag = document.createElement('rh-tag');

  if (block.classList.contains('size-compact')) {
    tag.setAttribute('compact', '');
  }

  [...block.children].forEach((child) => {
    moveInstrumentation(child, tag);
    while (child.firstElementChild.firstElementChild) {
      tag.append(child.firstElementChild.firstElementChild);
    }
  });

  block.textContent = '';
  block.append(tag);
}
