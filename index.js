const sdk = require('kinvey-flex-sdk');
const request = require('request'); // assumes that the request module was added to package.json
sdk.service((err, flex) => {
  const flexAuth = flex.auth;   // gets the FlexAuth object from the service
  function authenticate(context, complete, modules) {
    // authenticate the user here

    modules.logger.info("Inside authenticate function");
    if (err) {
      return complete().accessDenied(err).next();
    }
    return complete().setToken(token).ok().next();
  }
  // set the handler
  flexAuth.register('myAuth', authenticate);
});