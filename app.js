const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f",
"g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generateThePassword() {
    for(let i = 0; i < 15; i++) {
            let randomOne = Math.floor(Math.random() * characters.length)
            let randomTwo = Math.floor(Math.random() * characters.length)
            document.getElementById("password1").textContent += characters[randomOne];
            document.getElementById("password2").textContent += characters[randomTwo];
    }
}

function clearText() {
    document.getElementById("password1").textContent = ""
    document.getElementById("password2").textContent = ""
}

function generateThePasswordAndClearText() {
    if(document.getElementById("password1").textContent === "" && document.getElementById("password2").textContent === "") {
    generateThePassword()
    } else {
    clearText()
    generateThePassword()
    }
}
