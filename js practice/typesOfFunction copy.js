function userProfile(name) {
    console.log("Hello, " + name + "!");
    console.log("Welcome to the user profile page." + name);
}

const double = (num) => {
    a=num;
    b=num*2;
    return b;
};

setTimeout(() => {
    console.log("This is a delayed message.");
}, 2000);

function getUserData(callback) {
    setTimeout(() => {
        console.log("Fetching data, please wait 3 seconds...");
         callback();
    }, 3000);
   // callback();  // This runs immediately!
}

function user() {
    setTimeout(() => {
        console.log("User data fetched successfully!");
    }, 3000);
}

userProfile("Antony");
console.log(double(5));
getUserData(user);