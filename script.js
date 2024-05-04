function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}

function generate() {
    const uuid = uuidv4();
    document.getElementById("uuid").value = uuid
}

function copy() {
    const uuidBtn = document.getElementById("uuid");
    navigator.clipboard.writeText(uuidBtn.value)
    
    copyBtn = document.getElementById("copy")
    textCopied = document.getElementById("textCopied")


    copyBtn.classList.remove("btn-outline-secondary")
    copyBtn.classList.add("btn-outline-success")
    textCopied.innerHTML = "UUID Copied!"
    setTimeout(function() {
        copyBtn.classList.remove("btn-outline-success")
        copyBtn.classList.add("btn-outline-secondary")
        textCopied.innerHTML = ""
    },1000)
}

document.getElementById("generate").addEventListener("click", generate);

document.getElementById("copy").addEventListener("click", copy);

generate();