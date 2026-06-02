//String Literal 
let str="Antony"
let str1="Antony"

console.log(str==str1) //true
console.log(str===str1) //true

//string object
let str2= new String("Antony")
let str3= new String("Antony")  
console.log(str2==str3) //false
console.log(str2===str3) //false    

let antony= 'Antony\'s house'
console.log(antony) //Antony's house

let joshua="Antony\"S"
console.log(joshua) //Antony"S

console.log(antony+"\t"+"aj"+"\t"+joshua)
