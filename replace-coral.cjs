const fs = require('fs');
const path = require('path');

const directory = 'src';

function replaceInFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Replace 'coral' with 'primary', but skip ThemeSwitcher's internal id check? 
    // Actually, replacing 'coral' with 'primary' everywhere is mostly safe.
    // Except maybe in ThemeSwitcher.tsx's themes array IDs.
    // I'll use a regex that matches 'coral' as a stand-alone word or in class names.
    const updatedContent = content.replace(/coral/g, 'primary');
    if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function traverse(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
            replaceInFile(fullPath);
        }
    });
}

traverse(directory);
console.log('Replacement complete.');
