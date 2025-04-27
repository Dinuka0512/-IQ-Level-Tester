let num1;
let num2;

function setrandomnumbers(){
    //HERE GENARATED THE RANDOM NUMBERS 
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);

    // HERE SET THE RANDOM NUMBERS THAT WHAT GENARATED 
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
}

setrandomnumbers();

// HERE NEED TO GET THE ANSWER 
function getTheAnswer(){
    //HERE GET THE ANSWER WHAT GIVEN BY USER 
    let ansSubmit  = parseInt(document.getElementById("answer").value);

    if((num1+num2) === ansSubmit){
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
            title: "Oops...",
            text: "Your Ansewer is wrong! Try It again You can do this!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });

        //HERE CLEAR THE TEXT FEALD TEXT
        document.getElementById("answer").value = "";
    }
}