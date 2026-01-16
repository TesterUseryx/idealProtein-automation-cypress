/**
 * Generates a random string name for testing purposes
 * @param {boolean} isText - If true, generates alphabetic string; if false, generates numeric string
 * @param {number} numberOfDigits - Number of digits for numeric strings (required when isText is false)
 * @returns {string} Random generated string
 */
export function randomName(isText = true, numberOfDigits = null) {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if(isText){
    // Generate random alphabetic string of length 10
    for (let i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } else {
    // Generate random numeric string with specified number of digits
    if (numberOfDigits === null || numberOfDigits < 1) {
      throw new Error("numberOfDigits must be provided and greater than 0 when isText is false");
    }
    text = Math.random().toFixed(numberOfDigits + 1).split('.')[1];
  }
  return text;
}

/**
 * Generates a random email address for testing
 * @returns {string} Random email address
 */
export function randomEmail() {
  const username = randomName(true);
  const domain = randomName(true).toLowerCase();
  return `${username}@${domain}.com`;
}

/**
 * Generates a random alphanumeric string
 * @param {number} length - Length of the string to generate
 * @returns {string} Random alphanumeric string
 */
export function randomAlphanumeric(length = 10) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}



