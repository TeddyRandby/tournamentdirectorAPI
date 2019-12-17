// This is the root resolver. All resolvers will run through this.


// EXAMPLE:
const testResolver = require('./test');

const rootResolver = {
  ...testResolver

};

module.exports = rootResolver;
