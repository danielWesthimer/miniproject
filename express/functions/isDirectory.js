const { statSync } = require('fs')

/** 
* @param   {string} path folder or file path
* @returns {boolean} true, if is a directory.
*/
module.exports = function isDirectory(path) {
    return statSync(path).isDirectory()
}
