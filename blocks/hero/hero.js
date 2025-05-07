const rhCardPromo = `
<rh-card variant="promo" full-width="">
    <svg slot="image" role="img" aria-label="sample image" width="1920" height="158">
      <rect fill="var(--rh-color-border-interactive)" fill-opacity="0.1" stroke="var(--rh-color-border-interactive)" stroke-width="2px" width="100%" height="100%" stroke-dasharray="4 4">
    </rect></svg>
    <h2 slot="header">Full Width Promo</h2>
    <p>Promos which span the entire viewport do not have a border.</p>
    <rh-cta slot="footer" href="#">Call to action</rh-cta>
  </rh-card>
`;

export default function decorate(block) {
  console.log(block);
}