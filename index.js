// code
function iReturnThings (thing) {
    return thing;
  }
  
  iReturnThings({ firstName: 'Brendan', lastName: 'Eich' });
  // => {firstName: "Brendan", lastName: "Eich"}

  iReturnThings(function () { return 4 + 5; });
// => ƒ () { return 4 + 5; }

function iInvokeThings (thing) {
    return thing();
  }
  
  iInvokeThings(function () { return 4 + 5; });
  // => 9
  
  iInvokeThings(function () { return 'Hello, ' + 'world!'; });
  // => "Hello, world!"

  function main (cb) {
    console.log(cb());
  }
  
  main(function () { return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"});
  // LOG: After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!

  function greet (name, cb) {
    return cb(name);
  }
  
  greet('Ada Lovelace', function (name) { return 'Hello there, ' + name; });
  // => "Hello there, Ada Lovelace"
  
  function doMath (num1, num2, cb) {
    return cb(num1, num2);
  }
  
  doMath(42, 8, function (num1, num2) { return num1 * num2; });
  // => 336

  function somethingExpensive(cb) {
    // do something crazy,
    // like fetching a bajillion websites
    // then pass their data to the callback:
    cb(data);
  }

  