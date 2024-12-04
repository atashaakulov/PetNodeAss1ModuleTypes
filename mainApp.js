/**
 * Authors: 
 * Programmer 1: Natalia Akulov
 * Programmer 2: Yarden Halely
 * 
 * File Name: mainApp.js
 * 
 * Purpose: Main application script for processing lines from multiple text files
 *          and aggregating them into a single output file.
 * 
 * Notes:
 * - Input files are expected to be located in the '/fileText' directory.
 * - The number of lines copied from each file corresponds to its position in the inputFiles array.
 * - Lines that are empty or contain only whitespace are ignored.
 */

const { readFileContent, writeLinesToFile } = require('./fileUtils'); // Import utility functions
const fs = require('fs'); // Import file system module
const path = require('path'); // Import path module

// Define constants
const INPUT_DIRECTORY = '/fileText';
const OUTPUT_FILE = 'output.txt'; // output file name

// Define input file names
const inputFiles = [
    'readme1.txt',
    'readme2.txt',
    'readme3.txt',
    'readme4.txt',
    'readme5.txt',
    'readme6.txt',
    'readme7.txt',
    'readme8.txt',
    'readme9.txt',
    'readme10.txt',
];


/**
 * Reads lines from multiple input files, processes them, and writes the
 * desired number of lines from each file to an output file.
 * 
 * @param {string[]} inputFiles - An array of input file names.
 * @param {string} outputFile - The name of the output file.
 */
function copyLinesFromFiles(inputFiles, outputFile) {

    const dirPath = path.join(__dirname, INPUT_DIRECTORY); // Directory containing input files

    // Validate directory existence
    if (!fs.existsSync(dirPath)) {
        console.error(`Error: Directory ${dirPath} does not exist.`);
        return;
    }

    let outputContent = []; // Collect all lines to write to the output file

    // Process files
    inputFiles.forEach((file, index) => {
        const numberOfLines = index + 1; // Lines to copy from the current file
        const filePath = `${dirPath}/${file}`;
        const fileContentArr = readFileContent(filePath); // Read the content of the file

        // Filter out empty or whitespace-only lines, and extract the required number of lines
        const lines = fileContentArr
            .filter(line => line.trim() !== '') // Remove lines that are empty or whitespace
            .slice(0, numberOfLines); // Get the required lines, slice makes shure to take right slice if numberOfLines > contentArray.length

        outputContent = outputContent.concat(lines); // Add these lines to the final output

    });

    // Handle empty output content
    if (outputContent.length === 0) {
        console.error("Error: No lines were written to the output file. All input files were either missing or empty.");
        return;
    }

    // Write the collected content to the output file
    writeLinesToFile(outputContent, outputFile);
    console.log(`Processed ${inputFiles.length} files. Output written to ${outputFile}`);
}

// Run the program
copyLinesFromFiles(inputFiles, OUTPUT_FILE);
// writeLinesToFile('abc', OUTPUT_FILE); Error message is excpected