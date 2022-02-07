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
        const inputData = getInputData();
        for(let i=0;i<=letterBoxes.length -1; i++){
            if(inputData.green.includes(i)){
                letterBoxes[i].style.backgroundColor = 'green'
            }else if(inputData.yellow.includes(i)){
                letterBoxes[i].style.backgroundColor = 'yellow'
            }
        }
        if(inputData.userWord == word){
            alert("You guessed correct")
        }
        letterPos = 0;
        rowPos++
    }
})

// turn user input into a string
const getInputData = () => {
    const wordRow = wordRows[rowPos]
    const letterBoxes = wordRow.children
    var userWord = ''
    var green = []
    var yellow = []
    for(let i=0;i<=letterBoxes.length -1; i++){
        const letterBox = letterBoxes[i]
        const letter = letterBox.textContent.trim()
        if(letter == word[i]){
            green.push(i)
        }else if(word.includes(letter)){
            yellow.push(i)
        }
        userWord += letter
    }
    return {
        userWord: userWord,
        green: green,
        yellow: yellow
    };
}

const checkForHints = () => {
    const wordRow = wordRows[rowPos]
    const letterBoxes = wordRow.children
    for(let i=0;i<=letterBoxes.length -1; i++){
        const letterBox = letterBoxes[i]
        const letter = letterBox.textContent.trim()
        userWord += letter
    }
}