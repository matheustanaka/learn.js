const weapons = ["candlestick", "revolver", "lead pipe"];

const makeBroken = function (item) {
  return `broken ${item}`;
};

typeof _.map(weapons, makeBroken);

Array.isArray(_.map(weapons, makeBroken));

_.map(weapons, makeBroken);

const _ = {};

_.map = function (list, callback) {
  var storage = [];

  _.each(list, function (v, i, list) {
    storage.push(callback(v, i, list));
  });

  return storage;
};

_.map =
  ([1, 2, 3],
  function (val) {
    return val + 1;
  });
//Output: [2,3,4]
