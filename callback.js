
function executeCallback(callback) {
    callback();
}


//Print Hello
executeCallback(function() {
    console.log('Hello');
});