const { get } = require("node:http");

function userProfile(name) {
    console.log("Hello, " + name + "!");
}
const double = (num) => {
    return num * 2;
};

setTimeout(() => { console.log("This is a delayed message."); }, 2000);

function getUserData(callback) {
    setTimeout(() => {
        console.log("Fetching data, please wait 3 seconds...");
    }, 3000);
    callback();
}

function user() {
    
        console.log("User data fetched successfully!");
   
}


userProfile("Antony");
console.log(double(5));
getUserData(user);


