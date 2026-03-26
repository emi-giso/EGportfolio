const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Users\\emigi\\OneDrive\\Desktop\\Joaco\\Portfolio Emu\\potfolio_lovable\\emi-creative-studio\\src\\i18n\\translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const riversideReels = [
    "https://www.instagram.com/p/DWCZ491mn4j/",
    "https://www.instagram.com/p/DVJ2t7hgCCH/",
    "https://www.instagram.com/p/DUs7qKhDd4r/",
    "https://www.instagram.com/p/DTivfoujW86/",
    "https://www.instagram.com/p/DVwas5jkc0I/",
    "https://www.instagram.com/p/DVGjFaJkTHz/",
    "https://www.instagram.com/p/DOy7ROBCTBH/",
    "https://www.instagram.com/p/DPJgXTqD8NU/",
    "https://www.instagram.com/p/DNyLA2W3oqr/",
    "https://www.instagram.com/reel/DPEg-OzjWTB",
    "https://www.instagram.com/reel/DHUAFtgRUv1",
    "https://www.instagram.com/reel/DFqAWtwRd_X",
    "https://www.instagram.com/reel/C8P46VZv71b"
];

const yamaneatReels = [
    "https://www.instagram.com/p/DWMxJHRkQ8x/",
    "https://www.instagram.com/p/DVwYk0QEVMN/",
    "https://www.instagram.com/reel/DUEPY0sgRxa/",
    "https://www.instagram.com/reel/DWPnBgFka6_/"
];

// Helper to replace reels array content in a project by title
function updateProjectReels(content, projectTitle, newReels, isGallery = false) {
    if (isGallery) {
        // Find Yamaneat inside galleries
        const regex = new RegExp(`title: "${projectTitle}",[\\s\\S]*?reels: \\[([\\s\\S]*?)\\]`, 'g');
        return content.replace(regex, (match, p1) => {
            const indent = p1.match(/^\s*/)[0] || '                ';
            return `title: "${projectTitle}",\n              images: [],\n              reels: [\n${newReels.map(r => `${indent}"${r}"`).join(',\n')}\n              ]`;
        });
    } else {
        const regex = new RegExp(`title: "${projectTitle}"[\\s\\S]*?reels: \\[([\\s\\S]*?)\\]`, 'g');
        return content.replace(regex, (match, p1) => {
            const indent = p1.match(/^\s+/)[0] || '            ';
            return match.replace(`reels: [${p1}]`, `reels: [\n${newReels.map(r => `${indent}"${r}"`).join(',\n')}\n          ]`);
        });
    }
}

// Special case for Riverside because it appears twice (ES and EN)
const riversideRegex = /reels: \[\s*"https:\/\/www\.instagram\.com\/p\/DVwas5jkc0I\/",[\s\S]*?C8P46VZv71b"\s*\]/g;
content = content.replace(riversideRegex, `reels: [\n            ${riversideReels.map(r => `"${r}"`).join(',\n            ')}\n          ]`);

// Yamaneat inside galleries
const yamaneatRegex = /title: "Yamaneat",\s*images: \[\],\s*reels: \[([\s\S]*?)\]/g;
content = content.replace(yamaneatRegex, `title: "Yamaneat",\n              images: [],\n              reels: [\n                ${yamaneatReels.map(r => `"${r}"`).join(',\n                ')}\n              ]`);

fs.writeFileSync(filePath, content);
console.log('Updated translations.ts successfully');
