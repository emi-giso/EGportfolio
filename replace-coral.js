const fs = require('fs');
const path = require('path');

const directory = 'src';

function replaceInFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(/coral/g, 'primary');
    if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
            // Skip the ThemeSwitcher where ID is 'coral'? 
            // Better to just let it replace it and then fix the ID if needed.
            replaceInFile(fullPath);
        }
    });
}

traverse(directory);
