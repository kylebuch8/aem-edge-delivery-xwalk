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
    while (row.firstElementChild.firstElementChild) {
      card.append(row.firstElementChild.firstElementChild);
    }

    [...card.children].forEach((element) => {
      if (element.tagName.toLocaleLowerCase() === 'picture') {
        element.setAttribute('slot', 'image');
      }

      if (element.tagName.toLocaleLowerCase() === 'h1') {
        element.setAttribute('slot', 'header');
      }
    });
  });

  block.textContent = '';
  block.setAttribute('full-width', '');
  block.append(card);
}
