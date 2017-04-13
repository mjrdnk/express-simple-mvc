var plan = require('./index');

plan.target('test', { sudoUser: 'foo' });

plan.local(function(local) {
  local.sudo('printf "test foo"');
});

plan.local(function(local) {
  local.sudo("printf 'test foo'");
  local.sudo("echo $HOME");
  local.sudo("cd /tmp; pwd");
});
