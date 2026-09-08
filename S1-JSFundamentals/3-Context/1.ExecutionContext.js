let name = "Rahul";

greet();

function greet() {
  let message = "Hello";
  console.log(message);
}


console.log(greet2);

var greet2 = () => {
    let message = "Hello";
    console.log(message);
}


/* Execution Context: Like an environment which keeps track of execution of code
    * Memory for varables / functions
    * information about current execution

    Types: 
        - Global Execution Context
        - Function Execution Context

    Phases: Execution context is created in 2 phases
        - Creation Phase
            - Variables are registered
            - Function is stored
            - Memory is allocated for both

        - Execution Phase
*/