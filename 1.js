let age = 25;


function displayAge() {
    console.log("Age in global context:", age);
}


function changeAge() {
    age = 30; // Update the global variable 'age'
    console.log("Age after updating in function context:", age);
}
displayAge();
changeAge();
displayAge();