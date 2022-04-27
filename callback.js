const sayHello  = function() {
    console.log('Hello');
}

function executeCallback(callback) {
    callback();
}

executeCallback(sayHello);