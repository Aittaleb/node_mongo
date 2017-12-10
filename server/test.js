

'use strict';

( function () {
    function *square(x){
        yield x*x;
        console.log('x was',x);
    }
    let squareGenerator = square(5);
    squareGenerator.next();
    
})();