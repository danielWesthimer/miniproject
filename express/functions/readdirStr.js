const { readdirSync } = require("fs");

/**
 * @param   {string} path folder path
 * @returns {string[]} `string[]` from the specified folder path.
 */
module.exports = function readdirStr(path) {
  try {
    return readdirSync(path);
  } catch (error) {
    console.log("Error: readdirSync ", error);
    return;
  }
};
