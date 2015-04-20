/*
Input:
a: a whole, positive number

Output:
plus5: a number that is the sum of 5 and `a`
asString: a string that is just `a` converted to a string
yourNumberIs: a string that says "Your Number is `x`." where `x` is replaced by
in input `a`
a: the original a number
*/
function variableModification(a) {
    'use strict';
    var plus5, asString, yourNumberIs;

  //your code here
    plus5 = a + 5;
    asString = a.toString();
    yourNumberIs = "Your Number is " + a;
  //end your code
    return [plus5, asString, yourNumberIs, a];
}

/*
Input:
b: could be anything

Output:
return true if b is a primitive string value (also known as a string literal),
false otherwise
*/
function isString(b) {
  //your code here
    'use strict';
    if (typeof b !== "string") {
        return false;
    }
    return true;
  //end your code
}

/*
Input:
c: could be anything

Output:
return true if c is null, false otherwise
*/
function isNull(c) {
  //your code here
    'use strict';
    if (!(c === 'undefined') && c === null) {
        return true;
    }
    if (c === 'undefined') {
        return false;
    }
    return false;
  //end your code
}
