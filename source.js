let userscore=0;
let compscore=0;
let reset=document.querySelector(".reset");
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");






reset.addEventListener("click", rest=()=>{
    console.log("rest occur");
   userscore=0;
   compscore=0;
   userscorepara.innerText=userscore;
   compscorepara.innerText=compscore;
   msg.innerText="Play your move";
   msg.style.backgroundColor="#081b31"
})
const gencomchoice=()=>{
   const options=["rock","paper","scissors"];
   const randidx=Math.floor(Math.random()*3);
   return options[randidx];
}

const drawgame=()=>{
    msg.innerText="game was draw";
    msg.style.backgroundColor="#081b31";
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        msg.innerText=`you win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userscore++;
        userscorepara.innerText=userscore;
    }
    else{
        msg.innerText=`You lose! computer choice ${userchoice} beats your choice ${compchoice}`;
        msg.style.backgroundColor="red";
        compscore++;
        compscorepara.innerText=compscore;
    }
}




const playgame=(userchoice)=>{
 
 const compchoice=gencomchoice();
 

if(userchoice===compchoice){
drawgame();
}
else{
    let userwin=true;
    if(userchoice==="rock"){
       userwin= compchoice==="paper"? false:true;
    }
    else if(userchoice==="paper"){
       userwin= compchoice==="scissors" ? false:true;
    }
    else{
        userwin=compchoice==="rock" ? false:true;
    }
    showwinner(userwin,userchoice,compchoice);
}

}
choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        ;
        playgame(userchoice);
    })
})