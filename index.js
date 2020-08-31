const { pipeline } = require("stream");
const { promisify } = require("util");


module.exports = promisify(pipeline);
