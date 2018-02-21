var assert = require("assert");
var canSymlink = require("..");

describe("can-symlink", function() {
  it("returns true if no exceptions are thrown", function() {
    var options = {
      fs: {
        symlinkSync: function() {},
        mkdirSync: function() {},
        rmdirSync: function() {},
        unlinkSync: function() {}
      },
      forceTest: true
    };

    assert.equal(canSymlink(options), true);
  });

  it("returns false if exceptions are thrown", function() {
    var options = {
      fs: {
        symlinkSync: function() {
          throw Error("Symlink failed");
        },
        mkdirSync: function() {},
        rmdirSync: function() {},
        unlinkSync: function() {}
      },
      forceTest: true
    };

    assert.equal(canSymlink(options), false);
  });

  it("works on the real file-system", function() {
    let result = canSymlink({ forceTest: true });
    // On win32 we only care that we do not get an exception
    if (process.platform !== "win32") {
      assert.equal(result, true);
    }
  });
});
