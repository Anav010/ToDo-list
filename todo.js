let btn = document.querySelector("button");
let inp = document.querySelector(".textbox");
let ul = document.querySelector("ul");
let div = document.querySelector(".list");
let currHeight = 60;

function increase(currHeight){
    return currHeight+20;
}
function decrease(currHeight){
    return currHeight-20;
}

btn.addEventListener("click" , function(){
    let input = inp.value;
    inp.value = "";
    let newli = document.createElement("li");
    newli.innerHTML = `${input}<button class="dltbtn">X`;
    ul.appendChild(newli);
    currHeight = increase(currHeight);
    div.style.height = `${currHeight}px`;
})

ul.addEventListener("click" , function(event){
    if(event.target.nodeName == 'BUTTON'){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log(`${listitem.innerText} deleted`);
        currHeight = decrease(currHeight);
        div.style.height = `${currHeight}px`;
    }
    
})