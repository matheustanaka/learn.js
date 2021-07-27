/*
  The anatomy of Function
*/

var add = function (a, b) {
  return a + b;
};
/*
  var, function = Declaration and Definition, So in this case you are declaring var and defining as function.
  -
  add = Function Name 
  -
  (a,b) = Parameters, Here you are selecting the parameters, they are considered the input parameters.
  - 
  { return a + b; } = Function Body
*/

add(1, 3);

/*
  Executing the function
  add(1, 3, 4) = Invocation/Call-time
  -
  (1, 3) = Defining the parameters, the value "a" receive 1 and "b" receive 3.
  - 
  When you return execute this function add(); it will return a + b = 4
*/
