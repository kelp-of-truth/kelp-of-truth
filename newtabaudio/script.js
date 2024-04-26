let date=new Date();
window.addEventListener("load",()=>{
    document.querySelector("#clock").innerHTML=`${date.getHours()}:${date.getMinutes()}`;
})
setInterval(() => {
    document.querySelector("#clock").innerHTML=`${date.getHours()}:${date.getMinutes()}`;
}, 1000);