window.addEventListener("scroll",(e)=>{
    if(window.scrollY>100){
        document.querySelector(".logo").style.fill= "var(--neutral-verydarkgrayishblue)";
        for(let link of document.querySelectorAll("header a")){
            link.style.color= "var(--neutral-verydarkgrayishblue)";
        }
    }
    else{

        document.querySelector(".logo").style.fill= "var(--neutral-white)";
        for(let link of document.querySelectorAll("header a")){
            link.style.color= "var(--neutral-white)";
        }
    }
})
  