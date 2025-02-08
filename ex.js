let gameseq=[];
let userseq=[];
let btns=["red","green","yellow","blue"];

let start=false;
let level=0;
 

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
   if(start==false){
    console.log("game started");
    start=true;
    levelup();

   }   
});

function gameflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },500);
}

function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250);
}

function levelup(){
  userseq=[];
  level++;
  h2.innerText=`level ${level}`;
  let randindx=Math.floor(Math.random() * 3);
  let randcolor=btns[randindx];
  let randbtn=document.querySelector(`.${randcolor}`)
  gameseq.push(randcolor);
  console.log(gameseq);
  gameflash(randbtn);
}

function checkans(indx){
   
  if(userseq[indx]==gameseq[indx]){
     if(userseq.length==gameseq.length){
       setTimeout(levelup,1000);
     }
  }
  else{
    h2.innerHTML=`GAME OVER! your score was<b> ${level}</b><br>press any key to restart`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },150)
    reset();
  }
}

function btnpress(){
  
   let btn=this;
  userflash(btn);
  usercolor=btn.getAttribute("id");
  userseq.push(usercolor);
   
  checkans(userseq.length-1);

}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click",btnpress);
}
function reset(){
  start=false;
  level=0;
  gameseq=[];
  userseq=[];

}
