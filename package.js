/* jshint ignore:start */
Package.describe({
  name: 'happyucjs:happyucjs-accounts',
  version: '0.0.10',
  summary: 'A simple module for creating, managing and using HappyUC accounts in browser',
  git: 'https://github.com/happyucjs/happyucjs-accounts',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.export(['accounts'], ['client']);

  api.addFiles('dist/happyucjs-accounts.js', 'client');
  api.addFiles('package-init.js', 'client');
});