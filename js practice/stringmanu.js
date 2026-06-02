// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

let str=`Hello world`
let str1=str.split(" ")[1];
console.log("The last word is: " + str1 + " and length of the last word is: " + str1.length) 
//str3=str1[1];
//console.log("Length of the Last word: " + str3.length)

// Example 2:
// Input: s = " fly me to the moon "
// Output: 4
// Explanation: The last word is "moon" with length 4.

let example2=" fly me to the moon "
let exam2=example2.trim().split(" ")[4];
console.log("The last word is: " + exam2 + " and length of the last word is: " + exam2.length)


// Example 3:
function isanagram(str1, str2) {
    let s1= str1.replace(/\s/g, '').toLowerCase();
    let s2= str2.replace(/\s/g, '').toLowerCase();
    let sorted1=s1.split('').sort().join('');
    let sorted2=s2.split('').sort().join('');
    if(sorted1===sorted2){
        console.log("The strings are anagrams");
    }else{
        console.log("The strings are not anagrams");
    }       
}   
isanagram("listen", "silent");
isanagram("hello", "world");

let str3 = "Hello, world!";
let regex = /world/;
console.log(regex.test(str3));


    
    


