// Import Xpresser
import xpresser = require("xpresser");
import BootSocketIO = require("./backend/BootSocketIO");

/**
 * Boot Xpresser with your config
 *
 * Get config from config.ts
 * See https://xpresserjs.com/configuration/
 */
import config = require("./config");

// Initialize Xpresser
const $ = xpresser.init(config, {exposeDollarSign: false})

// Initialize Typescript
$.initializeTypescript(__filename)


$.on.serverBooted(BootSocketIO)


// Boot Xpresser
$.boot();

// END File
