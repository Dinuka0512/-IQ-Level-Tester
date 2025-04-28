let num1;
let num2;
let randomOp;

function setrandomnumbers(){
    //HERE GENARATED THE RANDOM NUMBERS 
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;

    if(num1 < num2){
        // HERE ALLWAYS SET THE BIGGEST NUMBER IN NUM 1 
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    // HERE SET THE RANDOM NUMBERS THAT WHAT GENARATED 
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    const symbols = ['/', '*', '+', '-'];
    randomOp = symbols[Math.floor(Math.random() * symbols.length)];
    document.getElementById("operation").innerHTML = randomOp;
}

setrandomnumbers();

// HERE NEED TO GET THE ANSWER 
function getTheAnswer(){
    //HERE GET THE ANSWER WHAT GIVEN BY USER 
    let ansSubmit  = parseFloat(document.getElementById("answer").value);
    

    // // GET THE OPERATOR AND DO THE OPERATION
    let TotalCorrect;
    switch(randomOp){
        case "+" : 
        TotalCorrect = num1 + num2;
        break;

        case "-" : 
        TotalCorrect = num1 - num2;
        break;

        case "*" : 
        TotalCorrect = num1 * num2;
        break;

        case "/" : 
        TotalCorrect = num1 / num2;

        const factor = Math.pow(10, 2);
        TotalCorrect = Math.floor(TotalCorrect * factor) / factor;
        break;
    }
    

    //NOW CHECK THE ANSWER 
    if(TotalCorrect == ansSubmit){
        //ANSWER IS CORRECT 
        Swal.fire({
            title: "Yor Answer is Correct!",
            icon: "success",
            draggable: true
          });

        //HERE CLEAR THE TEXT FEALD TEXT
        document.getElementById("answer").value = "";

        //HERE GET THE ANOTHER NUMBERS AND THIS PROSSESS WILL AGAIN AND AGAIN
        setrandomnumbers();

    }else{
        //ANSWER IS WRONG 
        Swal.fire({
            icon: "error",
            title: "Oops... Your Ansewer is wrong!",
            text : "THE CORRECT ANSWER : " + TotalCorrect,
            footer: '<a href="#">Why do I have this issue?</a>'
          });

        //HERE CLEAR THE TEXT FEALD TEXT
        document.getElementById("answer").value = "";
    }
}