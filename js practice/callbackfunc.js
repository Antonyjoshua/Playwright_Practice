// This function prints a greeting message
function greet(name) {
    console.log("Hello " + name);
}

// This function takes another function as input (callback)
function processUser(callback) {

    // Step 1: This runs immediately
    console.log("A");

    // Step 2: setTimeout is asynchronous
    // It schedules the callback to run AFTER 2 seconds
    setTimeout(() => {
        // This will run later (after delay)
        callback("Antony");
    }, 2000);

    // Step 3: This runs immediately (does NOT wait for setTimeout)
    console.log("Z");
}

// Passing greet function as a callback
processUser(greet);

/*
Expected Output:

A
Z
Hello Antony

Explanation:
1. "A" prints first
2. setTimeout starts but DOES NOT wait
3. "Z" prints next
4. After 2 seconds → "Hello Antony" prints
*/