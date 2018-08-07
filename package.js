/* jshint ignore:start */
Package.describe({
  name: 'icjs:icjs-accounts',
  version: '0.0.1',
  summary: 'A simple module for creating, managing and using IrChain accounts in browser',
  git: 'https://github.com/icjs/icjs-accounts',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.export(['accounts'], ['client']);

  api.addFiles('dist/icjs-accounts.js', 'client');
  api.addFiles('package-init.js', 'client');
});