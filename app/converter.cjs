const fs = require('fs');

const htmlContent = fs.readFileSync('../netstat_landing.html', 'utf8');

// Extract Tailwind config
const tailwindMatch = htmlContent.match(/tailwind\.config\s*=\s*(\{[\s\S]*?\});/);
let tailwindTheme = '';
if (tailwindMatch) {
    const configObjStr = tailwindMatch[1];
    tailwindTheme = configObjStr;
}

// Write tailwind.config.js
let tailwindConfigJs = `/** @type {import('tailwindcss').Config} */
export default ${tailwindTheme.replace(/darkMode:\s*"class",?/, '')}
`;
// Fix syntax issues if any, but since it's an object string, it's mostly valid JS. We need to add content array.
tailwindConfigJs = tailwindConfigJs.replace(/extend:\s*\{/, `content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {`);

fs.writeFileSync('tailwind.config.js', tailwindConfigJs);

// Extract CSS
const cssMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/g);
let cssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;

`;
if (cssMatch) {
    cssMatch.forEach(styleBlock => {
        const blockContent = styleBlock.replace(/<\/?style>/g, '');
        if (!blockContent.includes('tailwind.config')) {
           cssContent += blockContent + '\n';
        }
    });
}
fs.writeFileSync('src/index.css', cssContent);

// Extract Body and convert to JSX
let bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/);
if (bodyMatch) {
    let bodyHtml = bodyMatch[1];
    
    // Convert to JSX
    let jsx = bodyHtml
        .replace(/class=/g, 'className=')
        .replace(/<!--[\s\S]*?-->/g, '') // remove comments
        .replace(/stroke-width=/g, 'strokeWidth=')
        .replace(/stroke-linecap=/g, 'strokeLinecap=')
        .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
        .replace(/fill-rule=/g, 'fillRule=')
        .replace(/clip-rule=/g, 'clipRule=')
        .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
        .replace(/viewbox=/gi, 'viewBox=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/style="([^"]*)"/g, (match, styleStr) => {
            const styles = styleStr.split(';').filter(s => s.trim()).map(s => {
                const [key, value] = s.split(':');
                if(!key || !value) return '';
                const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                return `"${camelKey}": "${value.trim()}"`;
            });
            return `style={{${styles.join(', ')}}}`;
        });

    // Close self-closing tags
    const selfClosingTags = ['img', 'input', 'br', 'hr', 'source', 'path', 'rect', 'circle', 'line', 'polyline', 'polygon'];
    selfClosingTags.forEach(tag => {
        const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'g');
        jsx = jsx.replace(regex, `<${tag}$1 />`);
    });

    const appJsx = `import React from 'react';
import './index.css';

function App() {
  return (
    <div className="bg-background text-on-background min-h-screen dark">
      ${jsx}
    </div>
  );
}

export default App;
`;
    fs.writeFileSync('src/App.jsx', appJsx);
}

console.log('Conversion complete!');
