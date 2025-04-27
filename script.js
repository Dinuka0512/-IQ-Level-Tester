let num1;
let num2;

function setrandomnumbers(){
    //HERE GENARATED THE RANDOM NUMBERS 
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);

    // console.log(num1)
    // console.log(num2)

    // HERE SET THE RANDOM NUMBERS THAT WHAT GENARATED 
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
}

setrandomnumbers();