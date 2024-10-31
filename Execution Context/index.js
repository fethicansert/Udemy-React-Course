// 'use strict';

function calcAge(birthYear){
    const age = 2024 - birthYear;
    

    function printAge(){
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);
        
        if(birthYear >= 1981 && birthYear <= 1996){
            var millenal = true;

            //Creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven'

            //reassining outer scopre's variable
            output = 'NEW OUTPUT';
            const str = `Oh, and you're a millenal, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a + b;
            }
         
           
            console.log(output);
            
        }

        console.log(output);
    
        console.log(millenal);
    }

    printAge();
    return age;
};



const firstName = "Jonas";
calcAge(1991);


