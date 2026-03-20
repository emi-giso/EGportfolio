const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'i18n', 'translations.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newWeloReels = `          reels: [
            "https://www.instagram.com/reel/C3QhQMbO4Br",
            "https://www.instagram.com/reel/C1Pd2RJukmD",
            "https://www.instagram.com/reel/C04XUxmOEiP",
            "https://www.instagram.com/reel/Cz_infQhFJF",
            "https://www.instagram.com/reel/Cvz9EgKPZXk",
            "https://www.instagram.com/reel/C4qVffDsnts"
          ],`;

const newRiversideReels = `          reels: [
            "https://www.instagram.com/reel/DPEg-OzjWTB",
            "https://www.instagram.com/reel/DHUAFtgRUv1",
            "https://www.instagram.com/reel/DFqAWtwRd_X",
            "https://www.instagram.com/reel/C8P46VZv71b"
          ],`;

// We know from previous edits that Riverside has:
const currentRiversideReelsMatch = /reels:\s*\[\s*"https:\/\/www\.instagram\.com\/reel\/C4qVffDsnts",\s*"https:\/\/www\.instagram\.com\/reel\/C3QhQMbO4Br",\s*"https:\/\/www\.instagram\.com\/reel\/C1Pd2RJukmD",\s*"https:\/\/www\.instagram\.com\/reel\/C04XUxmOEiP",\s*"https:\/\/www\.instagram\.com\/reel\/Cz_infQhFJF"\s*\],/g;

// Welo has:
const currentWeloReelsMatch = /reels:\s*\[\s*"https:\/\/www\.instagram\.com\/reel\/Cvz9EgKPZXk",\s*"https:\/\/www\.instagram\.com\/reel\/DPEg-OzjWTB",\s*"https:\/\/www\.instagram\.com\/reel\/DHUAFtgRUv1",\s*"https:\/\/www\.instagram\.com\/reel\/DFqAWtwRd_X",\s*"https:\/\/www\.instagram\.com\/reel\/C8P46VZv71b"\s*\],/g;


content = content.replace(currentRiversideReelsMatch, newRiversideReels);
content = content.replace(currentWeloReelsMatch, newWeloReels);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Reels updated perfectly!');
