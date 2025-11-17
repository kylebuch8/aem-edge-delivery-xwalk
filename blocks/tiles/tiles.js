export default function decorate(block) {
  [...block.children].forEach((child) => {
    child.classList.add('tiles-tile-container');
  });
}
