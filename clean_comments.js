import fs from 'node:fs';
import path from 'node:path';

const targetDir = './src';
const extensions = ['.ts', '.tsx', '.css'];

// 1. Otimizado usando recursos nativos do Node > 20
function getFiles(dir) {
    const entries = fs.readdirSync(dir, { recursive: true, withFileTypes: true });
    
    return entries
        .filter(entry => entry.isFile() && extensions.includes(path.extname(entry.name)))
        .map(entry => path.join(entry.parentPath || entry.path, entry.name));
}

function cleanContent(content) {
    // 2. Regex robusta: Captura Strings ('' "" ``), JSDoc, Bloco (/* */) e Linha (//) numa única passada.
    const tokenRegex = /("|'|`)(?:\\[\s\S]|(?!\1)[\s\S])*\1|\/\*\*[\s\S]*?\*\/|\/\*[\s\S]*?\*\/|\/\/.*$/gm;

    return content.replace(tokenRegex, (match) => {
        if (match.startsWith('/**')) return match; // Mantém JSDoc intacto
        if (match.startsWith('/*')) return '';     // Remove outros comentários de bloco
        if (match.startsWith('//')) return '';     // Remove comentários de linha
        return match;                              // É uma string/URL, mantém intacta
    });
}

const files = getFiles(targetDir);

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const cleaned = cleanContent(content);

    if (content !== cleaned) {
        console.log(`Changes detected in: ${file}`);
        // fs.writeFileSync(file, cleaned); // Descomente para aplicar as mudanças
    }
});

console.log('Dry run complete. Review the list of files above.');
