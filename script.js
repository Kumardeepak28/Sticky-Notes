let ct = document.querySelector(".color_and_text").children;

// console.log(colorValue)
// let textAreaValue = container[0].value;
// let colorValue = container[1].children[0];
//console.log(colorValue);

let btn = document.querySelector("button");
//console.log(btn);

let rightContainer = document.querySelector(".right-container-notes");

let btn2 = document.querySelectorAll(".btn2");


btn.addEventListener("click", ()=>{
    let colorValue = ct[1].children[1].value;
// let colorValue = document.querySelector('.color_and_text input[type="color"]').value;

    console.log(colorValue)
    if(ct[0].value === "") {
        alert("please write some text");
        return;
    }
console.log(ct);

    makeStickyNote(ct[0].value,colorValue);

    ct[0].value = "";
    document.querySelector(".notesNotAdded").style.display = "none";
    removeStickyNotes()
});

 function removeStickyNotes() {
    
    btn2 = document.querySelectorAll(".btn2");

    btn2.forEach((singleBtn)=>{
        singleBtn.addEventListener("click", (e)=>{
              e.target.parentElement.remove();
        });
    });
}

function makeStickyNote(text,color) {
    // console.log(text,color);
    
    let div = document.createElement("div");
    div.classList.add("output")
    div.innerHTML = `<p>${text}</p><button class="btn2">X</button>`;
    div.style.backgroundColor = color;
    rightContainer.appendChild(div);
}