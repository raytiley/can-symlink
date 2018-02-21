var tmp = require("tmp");

module.exports = function testCanSymlink(options) {
  options = options || {};

  if (!options.forceTest && process.platform !== "win32") {
    return true;
  }

  var fs = options.fs || require("fs");

  var canLinkSrc = tmp.tmpNameSync();
  var canLinkDest = tmp.tmpNameSync();

  try {
    fs.mkdirSync(canLinkSrc);
  } catch (e) {
    return false;
  }

  try {
    fs.symlinkSync(canLinkSrc, canLinkDest, "dir");
  } catch (e) {
    return false;
  } finally {
    fs.rmdirSync(canLinkSrc);
  }

  fs.unlinkSync(canLinkDest);

  return true;
};
