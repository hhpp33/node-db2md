module.exports = require(__dirname + "/lib" + ((process.env.DB2MD_COVERAGE === "1") ? "-cov" : "") + "main");