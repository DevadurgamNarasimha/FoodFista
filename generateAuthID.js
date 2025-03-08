const axios = require('axios');
function isPrime(num){
    if(num<2)return false;
    for(let i=2; i+i<=num; i++){
        if(num%i===0)return false;
    }
    return true;
}
function generateAuthenticationId(studentCode,email){
    let firstName=email.split('@')[0];
    let inputString=(studentCode+firstName).toLowerCase();
    let stringWithoutVowels=inputString.replace(/[aeiou]/g, '');

    let filteredSring='';
    let hasPrime=false;
    for(let char of stringWithoutVowels){
        if(/\d/.test(char)){
            let num=parseInt(char,10);
            if(isPrime(num)){
                hasPrime=true;
                continue;
            }
        }
        filteredSring+=char;
    }
    if(!hasPrime){
        filteredSring+='1';
    }
    
    let newString='';
    for(let i=1; i<=filteredSring.length; i++){
        if(i%2===0){
            newString+=filteredSring[i-1];
        }
    }
    let authenticationId='';
    for(let char of newString){
        if(/[a-z]/.test(char)){
            authenticationId+=(char.charCodeAt(0)-96);
        }
        else if(/\d/.test(char)){
            authenticationId+='28';
        }
        else{
            authenticationId+='27';
        }
    }
    return authenticationId
}

  const studentCode="fw10_069";
  const email="imbickydutta@gmail.com";
  const authId=generateAuthenticationId(studentCode,email);
  console.log("Authentication ID:",authId);
  const apiUrl="https://questionmapping.onrender.com/api/problem/28273839293"
  axios.get(apiUrl)
  .then(Response=>console.log( "https://docs.google.com/document/d/3dskLl5twa64/edit?usp=dr",Response.data))
  .catch(error=>console.error( "Authentication ID provided is incorrect",error));