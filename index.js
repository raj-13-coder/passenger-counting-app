let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}



function save() {

    let countStr = count + " - "
    saveEl.textContent = saveEl.textContent + countStr
    countEl.textContent = 0
    count = 0

}


//change inner text to textcontent 
//textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements. 