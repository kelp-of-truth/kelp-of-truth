const codeEle=document.querySelectorAll("code");
const cm=document.querySelectorAll("code.cm");
let cmcnt=0;
for(let idx of codeEle){
    if(idx.classList.contains("ecm"))continue;
    var context=idx.innerHTML;
    // HEX
    if(context[0]==="#"&&context.length<=7&&parseInt(context.slice(1,context.length-1))!==NaN){
        appenColorModel(idx);
    }else
    // RGB
    if(context.slice(0, 4)==="rgb("&&context.slice(-1)===")"){
        var rgb=(context.replace(/rgb\(/,"").replace(/\)/,"").replace(/ /g,"")).split(",");
        if(Number(rgb[0])<=255&&Number(rgb[1])<=255&&Number(rgb[2])<=255){
            appenColorModel(idx);
        }
    }
}
for(let idx of cm){
    appenColorModel(idx);
}
function appenColorModel(idx){
    cmcnt++;
    idx.style.marginRight="0.2em";
    idx.style.marginLeft="0.2em";
    idx.style.position="relative";
    idx.style.display="inline-block";
    idx.style.cursor="default";
    idx.style.paddingLeft="1.5em"
    var context=idx.innerHTML;
    var context=idx.innerHTML
    var colormodel=document.createElement("div");
    colormodel.style.position="absolute";
    colormodel.style.left="0.3em";
    colormodel.style.bottom="0.3em";
    colormodel.style.height="0.7em";
    colormodel.style.width="0.7em";
    colormodel.style.border="1px solid #ebebeb";
    colormodel.style.outline="1px solid #636363";
    colormodel.style.backgroundColor=`${context}`;
    idx.appendChild(colormodel);
}
console.log(`color-model.js: Added ${cmcnt} color models`);
