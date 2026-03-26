const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Users\\emigi\\OneDrive\\Desktop\\Joaco\\Portfolio Emu\\potfolio_lovable\\emi-creative-studio\\src\\i18n\\translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Update Huinca Cine: Bring "HUINCA CINE 2022.jpg" to the front
const huincaRegex = /title: "Huinca Cine", role: ".*?",\n\s*description: ".*?",\n\s*tasks: \[\n[\s\S]*?\],\n\s*challenge: ".*?",\n\s*lesson: ".*?",\n\s*(?:links: \[.*? \],\n\s*)?images: \[\s*"(.*?)"\s*\]/g;

// Simple replacement for Huinca images arrays
content = content.replace(/images: \[\s*"\/EGportfolio\/projects\/HUINCA\/20220201_143755\.jpg",\s*"\/EGportfolio\/projects\/HUINCA\/20220309_174358\.jpg",\s*"\/EGportfolio\/projects\/HUINCA\/HUINCA CINE 2022\.jpg",\s*"\/EGportfolio\/projects\/HUINCA\/20220201_153216\.mp4"\s*\]/g, 
    'images: ["/EGportfolio/projects/HUINCA/HUINCA CINE 2022.jpg", "/EGportfolio/projects/HUINCA/20220201_143755.jpg", "/EGportfolio/projects/HUINCA/20220309_174358.jpg", "/EGportfolio/projects/HUINCA/20220201_153216.mp4"]');

// Update Production Assistant: Add/Bring "SHOOTING_HISTORIAS EXPRESS-03.jpg" to the front
content = content.replace(/images: \[\s*"\/EGportfolio\/projects\/HUINCA\/20220201_144049\.jpg"\s*\]/g, 
    'images: ["/EGportfolio/projects/HUINCA/SHOOTING_HISTORIAS EXPRESS-03.jpg", "/EGportfolio/projects/HUINCA/20220201_144049.jpg"]');

fs.writeFileSync(filePath, content);
console.log('Updated project images in translations.ts successfully');
