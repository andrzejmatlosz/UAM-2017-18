function createMessages() {
    let i = 0, messagesFuncs = []; 
    for (i = 0 ; i <= 3 ; i++) {
        messagesFuncs.push(
            (function(x) {
                return function() {
                    console.log(x);
                }
            })(i)
        );
    }
    return messagesFuncs;
}

messages = createMessages();
messages[0](); // 4
messages[1](); // 4
messages[2](); // 4