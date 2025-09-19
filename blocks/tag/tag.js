import { moveInstrumentation } from '../../scripts/scripts.js';
import '@rhds/elements/rh-tag/rh-tag.js';

export default function decorate(block) {
  const tag = document.createElement('rh-tag');

  if (block.classList.contains('size-compact')) {
    tag.setAttribute('size', 'compact');
  }

  Array.from(block.classList).forEach((className) => {
    if (className.startsWith('color-')) {
      tag.setAttribute('color', className.replace('color-', ''));
    }
  });

  [...block.children].forEach((child) => {
    moveInstrumentation(child, tag);
    tag.textContent = child.firstElementChild.firstElementChild.textContent;
  });

  block.textContent = '';
  block.append(tag);
}
