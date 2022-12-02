h1=document.querySelector('h1')
btn=document.querySelector("#box3 button")
flag=0
btn.addEventListener("click",function(){
   if(flag===0){
    h1.style.color="rgb(255, 246, 127)"
    btn.style.backgroundColor="rgb(255, 246, 127)"
    h1.textContent='Freinds'
    btn.textContent='Remove Freinds'
    flag=1
   }
   else{
    h1.style.color="black"
    btn.style.backgroundColor="transparent"
    h1.textContent='strangers'
    btn.textContent='add Freinds'
    flag=0
   }


})