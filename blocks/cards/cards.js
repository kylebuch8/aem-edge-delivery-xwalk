export default function decorate(block) {
  const div = document.createElement('div');
  div.classList.add('card-grid');

  [...block.children].forEach((row) => {
    const card = document.createElement('rh-card');

    [...row.children].forEach((child) => {
      const picture = child.querySelector('picture') || null;

      if (picture) {
        card.classList.add('image');
        picture.setAttribute("slot", "header");
        card.appendChild(picture)
      } else {
        while (child.firstElementChild) card.append(child.firstElementChild);
      }
    });

    div.appendChild(card);
  });

  block.textContent = '';
  block.append(div);
}
