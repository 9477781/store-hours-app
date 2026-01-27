const fs = require('fs');
const path = require('path');

const constantsPath = path.resolve('constants.ts');
const newJsonPath = path.resolve('newJsonDATE.txt');
fs.writeFileSync('debug_log.txt', 'Script started\n');
try {
    const constantsContent = fs.readFileSync(constantsPath, 'utf8');
    const newJsonRaw = fs.readFileSync(newJsonPath, 'utf8');
    // Ensure the new JSON is trimmed of whitespace
    const newJsonContent = newJsonRaw.trim();

    // Find the start of the variable
    const splitMarker = 'export const MOCK_STORE_DATA: StoreHoursResponse[] = [';
    const splitIndex = constantsContent.indexOf(splitMarker);

    if (splitIndex === -1) {
        console.error('Could not find MOCK_STORE_DATA in constants.ts');
        process.exit(1);
    }

    const header = constantsContent.substring(0, splitIndex);
    // Construct the new file content
    // We add the variable declaration and assign the new JSON array
    const newFileContent = header + 'export const MOCK_STORE_DATA: StoreHoursResponse[] = ' + newJsonContent + ';\n';

    fs.writeFileSync(constantsPath, newFileContent, 'utf8');
    console.log('Successfully updated constants.ts');
} catch (error) {
    console.error('Error updating file:', error);
    process.exit(1);
}
