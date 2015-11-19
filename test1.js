var tap = require('tap');

tap.test('test a', function (t) {
  t.plan(1);
  setTimeout(function () {
    t.pass();
    t.end();
  }, 50);
});

tap.test('test b', function (t) {
  t.plan(1);
  setTimeout(function () {
    t.pass();
    t.end();
  }, 50);
});

tap.test('test c', function (t) {
  t.plan(1);
  setTimeout(function () {
    t.pass();
    t.end();
  }, 50);
});