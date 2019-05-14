var isValid = function(s) {
    var stack = [];
    var len = s.length;
    var maps = { '[': ']', '{': '}', '(': ')' };
    for( var i = 0; i < len; i++ ) {
        var c = s.charAt(i);
        if( c === '{' || c === '[' || c === '(' ) {
            stack.push( c );
        } else {
            if( !stack.length ) return false;
            var top = stack.pop();
            if( maps[top] !== c ) return false;
        }
    }
    
    if( !stack.length ) return true;
    return false;
};

console.log( isValid('{[]}') );