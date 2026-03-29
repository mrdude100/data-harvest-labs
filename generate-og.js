const fs = require('fs');
const path = require('path');

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#000000"/>

  <!-- Red accent bar -->
  <rect x="0" y="0" width="6" height="630" fill="#EA281E"/>

  <!-- Grid lines subtle -->
  <line x1="0" y1="210" x2="1200" y2="210" stroke="#ffffff" stroke-width="0.5" opacity="0.06"/>
  <line x1="0" y1="420" x2="1200" y2="420" stroke="#ffffff" stroke-width="0.5" opacity="0.06"/>
  <line x1="400" y1="0" x2="400" y2="630" stroke="#ffffff" stroke-width="0.5" opacity="0.06"/>
  <line x1="800" y1="0" x2="800" y2="630" stroke="#ffffff" stroke-width="0.5" opacity="0.06"/>

  <!-- Top label -->
  <text x="72" y="96" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#EA281E" letter-spacing="4">DATA HARVEST LABS</text>

  <!-- Main title -->
  <text x="72" y="290" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-weight="900" font-size="112" fill="#ffffff" letter-spacing="-3">DATA</text>
  <text x="72" y="420" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-weight="900" font-size="112" fill="#ffffff" letter-spacing="-3">HARVEST</text>

  <!-- Tagline -->
  <text x="72" y="510" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-weight="400" font-size="22" fill="#ffffff" opacity="0.5">Data Analysis &amp; Research Services — Srinagar, Kashmir</text>

  <!-- Bottom founders line -->
  <text x="72" y="580" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-weight="400" font-size="15" fill="#ffffff" opacity="0.3">Faraz Ahmad Naik &amp; Dr. Zafir Ahmad Naik · dataharvestlabs.com</text>

  <!-- Red dot accent -->
  <circle cx="1128" cy="315" r="72" fill="#EA281E" opacity="0.15"/>
  <circle cx="1128" cy="315" r="36" fill="#EA281E" opacity="0.3"/>
  <circle cx="1128" cy="315" r="12" fill="#EA281E"/>
</svg>`;

const outputPath = path.join(__dirname, 'public', 'og-image.svg');
fs.writeFileSync(outputPath, svg);
console.log('OG image SVG written to public/og-image.svg');
console.log('NOTE: Convert to PNG for best compatibility:');
console.log('  npx sharp-cli --input public/og-image.svg --output public/og-image.png');
console.log('  OR open in browser and screenshot at 1200x630');