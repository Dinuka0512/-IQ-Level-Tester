let num1;
let num2;
let randomOp;
let points = 0;

let levelPointsArray = [100, 300, 500, 700, 800, 1000];
let hardnessArray = [10, 25, 75, 100, 250, 500];


if(localStorage.getItem("name") == null){
    document.getElementById("userDetails").style.display = "block";
    document.getElementById("container").style.display = "none";
}else{
    document.getElementById("name").innerHTML = localStorage.getItem("name");
}

if(localStorage.getItem("points")==null){
    document.getElementById("coins").innerHTML = 0;
}else{
    document.getElementById("coins").innerHTML = localStorage.getItem("points");
}

// HERE SAVE THE USER NAME
function save(){
    let name = document.getElementById("txtName").value;
    localStorage.setItem("name",name);
}

function setrandomnumbers(){
    let currentPoints =  document.getElementById("coins").innerHTML;
    
    if(levelPointsArray[0] >= currentPoints){
        console.log(hardnessArray[0]);
        //HERE GENARATED THE RANDOM NUMBERS 
        num1 = Math.floor(Math.random() * hardnessArray[0]) + 1;
        num2 = Math.floor(Math.random() * hardnessArray[0]) + 1;

        // setlevel
        document.getElementById("level").innerHTML = 1;
    }


    for(let i = 1; i < levelPointsArray.length; i++){
        if(levelPointsArray[i] >= currentPoints && levelPointsArray[i-1] <= currentPoints){
            //HERE GENARATED THE RANDOM NUMBERS 
            num1 = Math.floor(Math.random() * hardnessArray[i]) + 1;
            num2 = Math.floor(Math.random() * hardnessArray[i]) + 1;

            // setlevel
            document.getElementById("level").innerHTML = i+1;
        }
    }

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
        
        // HERE SET THE POINTS
        points = parseInt(document.getElementById("coins").innerHTML)
        // console.log(points)
        points += 10;
        localStorage.setItem("points",points);
        document.getElementById("coins").innerHTML = points;

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

        points = parseInt(document.getElementById("coins").innerHTML);
        points -= 5;
        localStorage.setItem("points",points);
        document.getElementById("coins").innerHTML = points;

    }
}