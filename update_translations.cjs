const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'i18n', 'translations.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Text Replacements for Riverside
content = content.replace(
  'category: "Agencia creativa · Comunicación integral"',
  'category: "Distribuidora de libros · Comunicación integral"'
);
content = content.replace(
  'category: "Creative agency · Integrated comms"',
  'category: "Book distributor · Integrated comms"'
);
content = content.replace(
  'Gestión integral de comunicación para una agencia creativa y su sello editorial: redes sociales, prensa, pauta publicitaria, email marketing y cobertura de eventos.',
  'Gestión integral de comunicación para una distribuidora de libros y sus sellos editoriales: redes sociales, prensa, pauta publicitaria, email marketing y cobertura de eventos.'
);
content = content.replace(
  'Full-scope communications management for a creative agency and its publishing imprint: social media, press, advertising, email marketing and event coverage.',
  'Full-scope communications management for a leading book distributor and its publishing imprints: social media, press, advertising, email marketing and event coverage.'
);
content = content.replace(
  'Comunicar para una agencia creativa es un ejercicio meta: se vende comunicación con comunicación. El estándar de calidad es máximo.',
  'Lograr unir el sistema visual y de contenido de editoriales tan distintas bajo un mismo sentido armónico y profesional.'
);
content = content.replace(
  'Communicating for a creative agency is inherently meta — you are selling communication through communication. The quality bar is at its highest.',
  'Uniting the visual and content systems of very different publishing houses under a single, harmonious brand sense.'
);
content = content.replace(
  'Cuando tu cliente es una agencia creativa, no alcanza con ser buena — hay que ser impecable.',
  'Comunicar para una distribuidora significa darle voz a la marca padre sin silenciar a las editoriales que representa.'
);
content = content.replace(
  "When your client is a creative agency, being good isn't enough — you need to be impeccable.",
  'Communicating for a distributor means giving a voice to the parent brand without silencing the imprints it represents.'
);

// 2. Arrays for Reels and Images
const riversideReels = `          reels: [
            "https://www.instagram.com/reel/C4qVffDsnts",
            "https://www.instagram.com/reel/C3QhQMbO4Br",
            "https://www.instagram.com/reel/C1Pd2RJukmD",
            "https://www.instagram.com/reel/C04XUxmOEiP",
            "https://www.instagram.com/reel/Cz_infQhFJF"
          ],`;

const huincaImages = `          images: [
            "/projects/HUINCA/20220201_143755.jpg",
            "/projects/HUINCA/20220309_174358.jpg",
            "/projects/HUINCA/HUINCA CINE 2022.jpg",
            "/projects/HUINCA/20220201_153216.mp4"
          ],`;

const weloImagesAndReels = `          images: [
            "/projects/WELO/1 (1).jpg",
            "/projects/WELO/averiguar avion.jpg",
            "/projects/WELO/EMPTY LEGS.mp4"
          ],
          reels: [
            "https://www.instagram.com/reel/Cvz9EgKPZXk",
            "https://www.instagram.com/reel/DPEg-OzjWTB",
            "https://www.instagram.com/reel/DHUAFtgRUv1",
            "https://www.instagram.com/reel/DFqAWtwRd_X",
            "https://www.instagram.com/reel/C8P46VZv71b"
          ],`;

// We will use regex to replace the image arrays.
// Riverside images:
const riversideImgRegex = /images:\s*\["\/projects\/01-riverside-1\.jpg",\s*"\/projects\/01-riverside-2\.jpg",\s*"\/projects\/01-riverside-3\.jpg"\],/g;
content = content.replace(riversideImgRegex, 'images: ["/projects/01-riverside-1.jpg", "/projects/01-riverside-2.jpg", "/projects/01-riverside-3.jpg"],\n' + riversideReels);

// Huinca images (removes reels if any were there, which they shouldn't be since the last command failed):
const huincaImgRegex = /images:\s*\["\/projects\/02-huinca-1\.jpg",\s*"\/projects\/02-huinca-2\.jpg",\s*"\/projects\/02-huinca-3\.jpg"\],/g;
content = content.replace(huincaImgRegex, huincaImages);

// Welo images:
const weloImgRegex = /images:\s*\["\/projects\/03-welo-1\.jpg",\s*"\/projects\/03-welo-2\.jpg",\s*"\/projects\/03-welo-3\.jpg"\],/g;
content = content.replace(weloImgRegex, weloImagesAndReels);

// CM Freelance & Set Assistant images:
const cmImgRegex = /images:\s*\["\/projects\/04-freelance-1\.jpg",\s*"\/projects\/04-freelance-2\.jpg"\],/g;
const setImgRegex = /images:\s*\["\/projects\/05-set-1\.jpg",\s*"\/projects\/05-set-2\.jpg"\],/g;
content = content.replace(cmImgRegex, '');
content = content.replace(setImgRegex, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Translations successfully updated!');
