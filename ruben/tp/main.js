import './style.css'
//import './theme.css'

document.querySelector(".closeMenu").addEventListener("click", ()=>{
    document.querySelector("details").open = closed;
})

for(let link of document.querySelectorAll("nav a")){
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        alert(document.querySelector("footer").textContent);
    })
}
document.querySelector("button").addEventListener("click",(e)=>{
    e.preventDefault();
    alert(document.querySelector("footer").textContent);
})

