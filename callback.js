
function executeCallback(callback) {
    callback();
}


//Print Hello
executeCallback(() => {
    console.log('Hello');
});

//Print Goodbye
executeCallback(function() {
    console.log('Goodbye');
});
