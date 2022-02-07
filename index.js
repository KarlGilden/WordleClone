var letterPos = 0;
var rowPos = 0;
const wordRows = document.querySelector("#word-grid").children
const word = "ABCDD"

// letter inputs
const btns = document.getElementsByClassName("key");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        if(letterPos <= 4){
            const wordRow = wordRows[rowPos]
            const letterBoxes = wordRow.children
            const letterBox = letterBoxes[letterPos]
            letterBox.textContent = this.textContent
            letterPos++
        }
    });
}

 // back key
const backKey = document.getElementById('back-key');
backKey.addEventListener("click", function () {
    if(letterPos > 0){
        letterPos--
        const wordRow = wordRows[rowPos]
        const letterBoxes = wordRow.children
        const letterBox = letterBoxes[letterPos]
        letterBox.textContent = ''
    }

})

// enter key
const enterKey = document.getElementById('enter-key');
enterKey.addEventListener("click", function () {
    const wordRow = wordRows[rowPos]
    const letterBoxes = wordRow.children
    const letterBox = letterBoxes[letterBoxes.length -1]
    if(letterBox.textContent == ''){
        alert('Word is too short')
    }
    else {

        const userWord = getUserWord();
        if(userWord == word){
            alert('You guess the word correctly')
        }else{
            alert('Not quite')
            letterPos = 0;
            rowPos++
        }
    }
})

// turn user input into a string
const getUserWord = () => {
    const wordRow = wordRows[rowPos]
    const letterBoxes = wordRow.children
    var userWord = ''
    for(let i=0;i<=letterBoxes.length -1; i++){
        const letterBox = letterBoxes[i]
        const letter = letterBox.textContent.trim()
        userWord += letter
    }
    console.log(word)
    return userWord;
}