Package.describe({
  summary: "Meteor smart package for Knox"
});

Npm.depends({
  knox: "0.8.5"
});

Package.on_use(function (api) {
  api.add_files([
    'server.js'
  ], 'server');

  api.export('Knox','server');
});
