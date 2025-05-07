import { moveInstrumentation } from '../../scripts/scripts.js';
import '@rhds/elements/rh-card/rh-card.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const card = document.createElement('rh-card');
  card.setAttribute('variant', 'promo');
  card.setAttribute('full-width', '');

  [...block.children].forEach((row) => {
    moveInstrumentation(row, card);
    while (row.firstElementChild) card.append(row.firstElementChild);
  });
  
  block.textContent = '';
  block.append(card);
}