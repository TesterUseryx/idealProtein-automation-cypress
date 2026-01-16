/**
 * Generates and loads JSON credentials from test data file
 * @param {string} filePath - Optional custom file path (defaults to '../test-data/account.json')
 * @returns {object} Credentials object from JSON file
 * @throws {Error} If file cannot be loaded
 */
export function generateJson(filePath = '../test-data/account.json') {
    let credentials;
    
    try {
        credentials = require(filePath);
        
        // Validate that credentials is an object
        if (typeof credentials !== 'object' || credentials === null) {
            throw new Error('Invalid credentials format: Expected an object');
        }
        
        return credentials;
    } catch (err) {
        console.error('Error loading JSON file:', err);
        console.error(`Couldn't load the inputJsonData file. Please ensure that ` +
            `you have the inputJsonData.json in subfolder ./test-data/account.json ` +
            `in the same folder as the tests`);
        
        // In test environment, throw error instead of exiting
        if (typeof process !== 'undefined' && process.env.NODE_ENV === 'test') {
            throw err;
        }
        process.exit(1);
    }
}

/**
 * Validates JSON structure for required fields
 * @param {object} jsonData - JSON data to validate
 * @param {array} requiredFields - Array of required field names
 * @returns {boolean} True if all required fields are present
 */
export function validateJsonStructure(jsonData, requiredFields = []) {
    if (!jsonData || typeof jsonData !== 'object') {
        return false;
    }
    
    return requiredFields.every(field => jsonData.hasOwnProperty(field));
}