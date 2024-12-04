/**
 * Authors: 
 * Programmer 1: Natalia Akulov
 * Programmer 2: Yarden Halely
 * 
 * File Name: fileUtils.js
 * Purpose: Utility functions for file operations such as reading and writing files.
 */


const fs = require('fs'); // File system module
/**
 * Reads the content of a file and returns it as an array of lines.
 * If the file does not exist, it logs a message and returns an empty array.
 * 
 * @param {string} fileName - The name of the file to read.
 * @returns {string[]} - An array of lines from the file.
 */
// Function to read content from a file - if the file not found will return empty array
function readFileContent(fileName) {
    if (fs.existsSync(fileName)) {
        return fs.readFileSync(fileName, 'utf-8').split('\n');
    } else {
        console.log(`File not found: ${fileName}`);
        return [];
    }
}


/**
 * Writes an array of lines to a file, overwriting its content.
 * 
 * @param {string[]} lines - The lines to write to the file.
 * @param {string} fileName - The name of the file to write to.
 */
function writeLinesToFile(lines, fileName) {

    // Check if `lines` is an array
    if (!(lines instanceof Array)) {
        console.log('This is NOT an array.');
        return;
    }

    const content = lines.join('\n') + '\n';
    fs.writeFileSync(fileName, content); // Overwrites the file
    console.log(`Overwritten: ${fileName}`);
}

module.exports = { readFileContent, writeLinesToFile };
