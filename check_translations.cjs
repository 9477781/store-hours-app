const fs = require('fs');

const constants = fs.readFileSync('constants.ts', 'utf8');

// Find all prefecture entries
const cities = new Set();
const prefRegex = /"prefecture":\s*"([^"]+)"/g;
let match;

while ((match = prefRegex.exec(constants)) !== null) {
     const val = match[1];
     // val is like "東京都 新宿区"
     const parts = val.split(/[ \u3000]+/);
     if (parts.length > 1) {
         cities.add(parts[1]);
     }
}

// Find existing translations
const translationBlockMatch = constants.match(/export const CITY_TRANSLATIONS: Record<string, string> = {([\s\S]*?)};/);
const definedCities = new Set();

if (translationBlockMatch) {
    const translationBlock = translationBlockMatch[1];
    const lines = translationBlock.split('\n');
    lines.forEach(l => {
        const m = l.match(/"([^"]+)":/);
        if (m) definedCities.add(m[1]);
    });
}

const missing = [];
cities.forEach(c => {
    if (!definedCities.has(c)) {
        missing.push(c);
    }
});

console.log("Missing cities:");
missing.forEach(c => console.log(c));
