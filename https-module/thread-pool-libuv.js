const crypto = require('node:crypto');  
const startDate = Date.now();

crypto.pbkdf2Sync('password','salt',10000,512,"sha512");
crypto.pbkdf2Sync('password','salt',10000,512,"sha512");

console.log('hash:',Date.now() - startDate);
