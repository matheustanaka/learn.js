const contructArr = function () {
  const arr = Array.prototype.slice.call(arguments);
  //[was, it, in]
  arr.push("the billiards room?");
  //['was', 'it', 'in', 'the billiards room?']
  return arr.join(" ");
};
contructArr("was", "it", "in");

//was it in the billiards room?
