const nodeCrypto = require('crypto');

global.crypto = {
  getRandomValues(buffer) {
    return nodeCrypto.randomFillSync(buffer);
  },
};

delete global.window.location;

window.user = {};
window.user.features = {};
global.window.location = {};
