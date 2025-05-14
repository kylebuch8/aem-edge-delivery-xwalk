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

  for (const cls of link.classList) {
    if (VARIANTS[cls]) {
      cta.setAttribute('variant', VARIANTS[cls]);
      break;
    }
  }

  link.classList.remove('button'); 

  block.textContent = '';
  block.append(cta);
}