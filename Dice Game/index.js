// // 1.alert("hello");
// // 2.create a random number from 1-6
// // 3.change imageName  by concatinating  the number dice+randomNumber1+.png
// // 4.add path inside folder to it  
// now select the img 1 element
// update the path 

// -----------------------------------------------------------------------
// first 
// let randomNumber1 =Math.floor(Math.random()*6)+1;
// let randomDiceImage="dice"+randomNumber1+".png";
// let randomImageSource="images/"+randomDiceImage;
// document.querySelectorAll("img")[0]
// let image1=document.querySelectorAll("img")[0];
// image1.setAttribute("src",randomImageSource);

// -------------------------------------------------------------------------
// do three line code in one line  extra 


// -------------------------------------------------------------------------
// let randomNumber2 =Math.floor(Math.random()*6)+1;

// let randomImageSource2="images/dice"+randomNumber2+".png";


// document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
// -------------------------------------------------------------------------------------
let randomNumber1=Math.floor(Math.random() * 6)+1;
let randomNumber2=Math.floor(Math.random() * 6)+1;
let randomImageSource="images/"+"dice"+(Math.floor(Math.random() *6)+1)+".png"
document.querySelectorAll("img")[0].setAttribute("src","images/"+"dice"+randomNumber1+".png")
document.querySelectorAll("img")[1].setAttribute("src","images/"+"dice"+randomNumber2+".png")

// if player 1 wins

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player1 wins!🚩";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player2 wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw";

}