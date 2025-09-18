import { moveInstrumentation } from '../../scripts/scripts.js';
import '@rhds/elements/rh-card/rh-card.js';
import '@rhds/elements/rh-cta/rh-cta.js';

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

      if (element.classList.contains('button-container')) {
        const cta = document.createElement('rh-cta');
        cta.href = element.firstElementChild.href;
        cta.textContent = element.firstElementChild.textContent;
        element.replaceChild(cta, element.firstElementChild);
      }
    });
  });

  block.textContent = '';
  block.setAttribute('full-width', '');
  block.append(card);
}
