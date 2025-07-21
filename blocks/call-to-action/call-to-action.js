import '@rhds/elements/rh-cta/rh-cta.js';

const VARIANTS = {
  default: '',
  primary: 'primary',
  secondary: 'secondary',
};

export default function decorate(block) {
  const link = block.querySelector('a');
  const cta = document.createElement('rh-cta');
  cta.appendChild(link);

  const matchingVariant = Array.from(link.classList).find((cls) => VARIANTS[cls]);
  if (matchingVariant) {
    cta.setAttribute('variant', VARIANTS[matchingVariant]);
  }

  link.classList.remove('button');

  block.textContent = '';
  block.append(cta);
}
