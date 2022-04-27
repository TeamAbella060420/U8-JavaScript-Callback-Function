# U8-JavaScript-Callback-Function
 
1. What is a Callback? - A callback is function like any other, but it's what you do with it that's different. Instead of calling the function manually, you're passing the name of the function to another function to execute. One called callbackFunction and another called executeCallback. Both have the word callback in their names, but they don't need to. They're just the names that describe what the functions are or do. The callbackFunction is a regular function that could have any functionality inside. The executeCallback function will, at some point in the future, execute or call the callback.
2. Creating a Simple Callback Function - There's going to be two JavaScript files, logger.js and callback.js.
Logger.js is where the non callback code is, and
callback.js is where we'll be programming the callback code.
Open up the logger.js file, and
you can see we have a variable with my name and role.
We also have a logTeacher function that takes the teacher, and
prints out their name and role.
3. Anonymous Functions - An anonymous function is a function without a name. In the case of a callback an anonymous function can be written in place or in line where the name of the function would be.
4. Anonymous Function as Arrow Functions - Arrow functions are a common way you'll see anonymous functions being written.
5. Using a One-Off Timer with setTimeout - explore one-off timers with the `setTimeout` function.