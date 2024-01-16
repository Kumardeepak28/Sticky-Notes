let container = document.querySelector(".text-and-color").children;

let textAreaValue = container[0].value;
let colorValue = container[1].children[0].value;
//console.log(colorValue);

let btn = document.querySelector("button");
//console.log(btn);

let rightContainer = document.querySelector(".right-container-notes");

btn.addEventListener("click",()=>{
    if(textAreaValue === "") {
        alert("please write some text");
        return;
    }

    makeStickyNote(textAreaValue,colorValue);
})

function makeStickyNote(text,color) {
    let div = document.createElement("div");
    div.innerHTML = `
    <p>${text}</p>
    <button>X</button>
    `;
    div.style.backgroundColor = color;
    rightContainer.appendChild(div);
}