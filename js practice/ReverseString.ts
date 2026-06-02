 let str=`Malayalam`;
function reverseSting()
{
 
  str=str.toLowerCase();
  let reversedStr='';
  for(let i=str.length-1;i>=0;i--)
  {
    reversedStr+=str[i];    
  }
  //let reversedStr=str.split('').reverse().join('');
  return reversedStr;
}

console.log(reverseSting());
if(reverseSting()===str)
{
  console.log(`The string is a palindrome`);
}   
else{
  console.log(`The string is not a palindrome`);
}