let Feild1= document.querySelector("#F1");
let Feild2= document.querySelector("#F2");
let Feild3= document.querySelector("#F3");
let Feild4= document.querySelector("#F4");
let Feild5= document.querySelector("#F5");
let Feild6= document.querySelector("#F6");
let Feild7= document.querySelector("#F7");
let Feild8= document.querySelector("#F8");
let Feild9= document.querySelector("#F9");
let reset_btn= document.querySelector("#btn");
let Pl_turn= document.querySelector("#Pl-turn");
let flag=1;

function winner(){

    // CHECKING IF PLAYER X WON

    //123

    if( Feild1.value == "X" && Feild2.value == "X" && Feild3.value == "X" ){
        Pl_turn.innerHTML = "player X Won";
        Pl_turn.style="border: 2px solid greenyellow;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild1.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild2.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild3.parentElement.style="background: rgba(0,0,0,0.3)";
    }
    
    //159
    
    else if(Feild1.value == "X" && Feild5.value == "X" && Feild9.value == "X" ){
   Pl_turn.innerHTML = "player X Won";
        Pl_turn.style="border: 2px solid greenyellow;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild1.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild5.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild9.parentElement.style="background: rgba(0,0,0,0.3)";
    }
    
    //147
    
    else if(Feild1.value == "X" && Feild4.value == "X" && Feild7.value == "X" ){
   Pl_turn.innerHTML = "player X Won";
        Pl_turn.style="border: 2px solid greenyellow;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild1.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild4.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild7.parentElement.style="background: rgba(0,0,0,0.3)";
    }
    
    //258
    
    else if(Feild2.value == "X" && Feild5.value == "X" && Feild8.value == "X" ){
   Pl_turn.innerHTML = "player X Won";
        Pl_turn.style="border: 2px solid greenyellow;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild2.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild5.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild8.parentElement.style="background: rgba(0,0,0,0.3)";
    }
    
    //369
    
    else if(Feild3.value == "X" && Feild6.value == "X" && Feild9.value == "X" ){
   Pl_turn.innerHTML = "player X Won";
        Pl_turn.style="border: 2px solid greenyellow;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild3.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild6.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild9.parentElement.style="background: rgba(0,0,0,0.3)";
    }
    
    //357
    
    else if(Feild3.value == "X" && Feild5.value == "X" && Feild7.value == "X" ){
   Pl_turn.innerHTML = "player X Won";
        Pl_turn.style="border: 2px solid greenyellow;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild3.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild5.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild7.parentElement.style="background: rgba(0,0,0,0.3)";
    }
    
    //456
    
    else if(Feild4.value == "X" && Feild5.value == "X" && Feild6.value == "X" ){
   Pl_turn.innerHTML = "player X Won";
        Pl_turn.style="border: 2px solid greenyellow;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild4.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild5.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild6.parentElement.style="background: rgba(0,0,0,0.3)";
    }
    
    //789
    
    else if(Feild7.value == "X" && Feild8.value == "X" && Feild9.value == "X" ){
        Pl_turn.innerHTML = "player X Won";
        Pl_turn.style="border: 2px solid greenyellow;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild7.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild8.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild9.parentElement.style="background: rgba(0,0,0,0.3)";
    }


    // END OF PLAYER X CHECKING

    //CHECKING IF PLAYER O WON
    
    //123

    if( Feild1.value == "O" && Feild2.value == "O" && Feild3.value == "O" ){
        Pl_turn.innerHTML = "player O Won";
        Pl_turn.style="border: 2px solid red;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild1.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild2.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild3.parentElement.style="background: rgba(0,0,0,0.3)";

    }
    
    //159
    
    else if(Feild1.value == "O" && Feild5.value == "O" && Feild9.value == "O" ){
    Pl_turn.innerHTML = "player O Won";
        Pl_turn.style="border: 2px solid red;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild1.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild5.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild9.parentElement.style="background: rgba(0,0,0,0.3)";
    }
    
    //147
    
    else if(Feild1.value == "O" && Feild4.value == "O" && Feild7.value == "O" ){
    Pl_turn.innerHTML = "player O Won";
        Pl_turn.style="border: 2px solid red;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild1.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild4.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild7.parentElement.style="background: rgba(0,0,0,0.3)";
    }
    
    //258
    
    else if(Feild2.value == "O" && Feild5.value == "O" && Feild8.value == "O" ){
    Pl_turn.innerHTML = "player O Won";
        Pl_turn.style="border: 2px solid red;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild2.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild5.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild8.parentElement.style="background: rgba(0,0,0,0.3)";
    }
    
    //369
    
    else if(Feild3.value == "O" && Feild6.value == "O" && Feild9.value == "O" ){
    Pl_turn.innerHTML = "player O Won";
        Pl_turn.style="border: 2px solid red;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild3.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild6.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild9.parentElement.style="background: rgba(0,0,0,0.3)";
    }
    
    //357
    
    else if(Feild3.value == "O" && Feild5.value == "O" && Feild7.value == "O" ){
    Pl_turn.innerHTML = "player O Won";
        Pl_turn.style="border: 2px solid red;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild3.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild5.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild7.parentElement.style="background: rgba(0,0,0,0.3)";
    }
    
    //456
    
    else if(Feild4.value == "O" && Feild5.value == "O" && Feild6.value == "O" ){
    Pl_turn.innerHTML = "player O Won";
        Pl_turn.style="border: 2px solid red;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild4.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild5.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild6.parentElement.style="background: rgba(0,0,0,0.3)";
    }
    
    //789
    
    else if(Feild7.value == "O" && Feild8.value == "O" && Feild9.value == "O" ){
    Pl_turn.innerHTML = "player O Won";
        Pl_turn.style="border: 2px solid red;"
        Feild1.disabled = true;
        Feild2.disabled = true;
        Feild3.disabled = true;
        Feild4.disabled = true;
        Feild5.disabled = true;
        Feild6.disabled = true;
        Feild7.disabled = true;
        Feild8.disabled = true;
        Feild9.disabled = true;
        Feild7.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild8.parentElement.style="background: rgba(0,0,0,0.3)";
        Feild9.parentElement.style="background: rgba(0,0,0,0.3)";
    }
}


//Feild 1
function F1(){
    if(flag==1){
        Feild1.value="X";
        Feild1.disabled=true;
        Pl_turn.innerHTML = "player O turn";
        flag=0;
    }
    else{
        Feild1.value="O";
        Feild1.disabled=true;
        Pl_turn.innerHTML = "player x turn";
        flag=1
    }
    winner();
}

//Feild 2
function F2(){
    if(flag==1){
        Feild2.value="X";
        Feild2.disabled=true;
        Pl_turn.innerHTML = "player O turn";
        flag=0;
    }
    else{
        Feild2.value="O";
        Feild2.disabled=true;
        Pl_turn.innerHTML = "player x turn";
        flag=1
    }
    winner();
}

//Feild 3
function F3(){
    if(flag==1){
        Feild3.value="X";
        Feild3.disabled=true;
        Pl_turn.innerHTML = "player O turn";
        flag=0;
    }
    else{
        Feild3.value="O";
        Feild3.disabled=true;
        Pl_turn.innerHTML = "player x turn";
        flag=1
    }
    winner();
}

//Feild 4
function F4(){
    if(flag==1){
        Feild4.value="X";
        Feild4.disabled=true;
        Pl_turn.innerHTML = "player O turn";
        flag=0;
    }
    else{
        Feild4.value="O";
        Feild4.disabled=true;
        Pl_turn.innerHTML = "player x turn";
        flag=1
    }
    winner();
}

//Feild 5
function F5(){
    if(flag==1){
        Feild5.value="X";
        Feild5.disabled=true;
        Pl_turn.innerHTML = "player O turn";
        flag=0;
    }
    else{
        Feild5.value="O";
        Feild5.disabled=true;
        Pl_turn.innerHTML = "player x turn";
        flag=1
    }
    winner();
}

//Feild 6
function F6(){
    if(flag==1){
        Feild6.value="X";
        Feild6.disabled=true;
        Pl_turn.innerHTML = "player O turn";
        flag=0;
    }
    else{
        Feild6.value="O";
        Feild6.disabled=true;
        Pl_turn.innerHTML = "player x turn";
        flag=1
    }
    winner();
}

//Feild 7
function F7(){
    if(flag==1){
        Feild7.value="X";
        Feild7.disabled=true;
        Pl_turn.innerHTML = "player O turn";
        flag=0;
    }
    else{
        Feild7.value="O";
        Feild7.disabled=true;
        Pl_turn.innerHTML = "player x turn";
        flag=1
    }
    winner();
}

//Feild 8
function F8(){
    if(flag==1){
        Feild8.value="X";
        Feild8.disabled=true;
        Pl_turn.innerHTML = "player O turn";
        flag=0;
    }
    else{
        Feild8.value="O";
        Feild8.disabled=true;
        Pl_turn.innerHTML = "player x turn";
        flag=1
    }
    winner();
}

//Feild 9
function F9(){
    if(flag==1){
        Feild9.value="X";
        Feild9.disabled=true;
        Pl_turn.innerHTML = "player O turn";
        flag=0;
    }
    else{
        Feild9.value="O";
        Feild9.disabled=true;
        Pl_turn.innerHTML = "player x turn";
        flag=1
    }
    winner();
}

reset_btn.addEventListener('click',()=>{
    window.location.reload();
})
