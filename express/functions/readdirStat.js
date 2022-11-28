const readdirStr = require("./readdirStr");
const getStatObject = require("./getStatObject");
const { join } = require("path");

/**
 * @param   {string} path a folder path
 * @returns {[StatObjects:{} ]} [...FileStatObjects, ...FolderStatObjects].
 */
module.exports = function readdirStat(path) {
  return readdirStr(path).map((fileOrFolder) =>
    getStatObject(join(path, fileOrFolder))
  );
};
