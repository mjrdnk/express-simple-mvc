// run on your deployment machine by typing executing:
// fly development or fly production

var plan = require('flightplan');

var appName = 'API_NAME';
var username = 'USERNAME'; // username on server machine
var startFile = 'server.js';

var tmpDir = appName+'-' + new Date().getTime();

// configuration
plan.target('development', [
  {
    host: 'HOST_IP',
    username: username,
    agent: process.env.SSH_AUTH_SOCK
  }
]);

plan.target('production', [
  {
    host: 'HOST_IP',
    username: username,
    agent: process.env.SSH_AUTH_SOCK
  },
//add in another server if you have more than one
// {
//   host: '104.131.93.216',
//   username: username,
//   agent: process.env.SSH_AUTH_SOCK
// }
]);

// run commands on localhost
plan.local(function(local) {
  // uncomment these if you need to run a build on your machine first
  // local.log('Run build');
  // local.exec('gulp build');

  local.log('Copy files to remote hosts');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  // rsync files to all the destination's hosts
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

// run commands on remote hosts (destinations)
plan.remote(function(remote) {
  remote.log('Move folder to root');
  remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username});
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.sudo('npm --production --prefix ~/' + tmpDir + ' install ~/' + tmpDir, {user: username});

  remote.log('Reload application');
  remote.sudo('ln -snf ~/' + tmpDir + ' ~/'+appName, {user: username});

  remote.exec('cd ~/'+ appName  + '&&' + 'forever start ./' + startFile, {failsafe: true});
  remote.exec('cd ~/'+ appName  + '&&' + 'forever start ./' + startFile);
});
