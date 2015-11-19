var tap = require('tap');

tap.test('test a2', function (t) {
  t.plan(1);
  setTimeout(function () {
    t.pass();
    t.end();
  }, 50);
});

tap.test('test b2', function (t) {
  t.plan(1);
  setTimeout(function () {
    t.pass();
    t.end();
  }, 50);
});

tap.test('test c2', function (t) {
  t.plan(1);
  setTimeout(function () {
    t.pass();
    t.end();
  }, 50);
});