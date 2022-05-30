let texts =["informatique decisionnel et science de donnees","this is typing speed","i love programming in javascript"]
let myParagraph=document.querySelector("#paragraph")
let myButtun=document.querySelector("#btn")
function showText(){
    myParagraph.innerHTML=""
    let a=Math.floor(Math.random()*3)
    let textInParagraph=document.createTextNode(texts[a]);
    myParagraph.appendChild(textInParagraph);
}
let myTime=document.querySelector("#time")
ms=0;
s=0
m=0;
let textTime=document.createTextNode("00 : 00 : 00 ")
myTime.appendChild(textTime)
function showtime(){
    myTime.innerHTML="" 
    if (ms<59){
        ms++
    }
    if(ms==59){
        ms=0
        s++
    }
    if(s==59){
        s=0
        m++
    }
    myTime.appendChild(document.createTextNode(`${m} : ${s} : ${ms}`))
    if (myParagraph.innerHTML==myRecopie.value){
        clearInterval(myinterval)   
        }
}
function TimeGo(){
    myinterval=setInterval(showtime,17)
}
let myRecopie=document.querySelector("#recopie")
let tg=document.querySelector("#tryagain")
function reload(){
    location.reload();
}
tg.addEventListener("click",reload)
myButtun.addEventListener("click",TimeGo)   
myButtun.addEventListener("click",showText)


