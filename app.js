function wordCounter() {
    let inputTxt = document.getElementById("inputbox");
    let words = getWordCount(inputTxt.value);
    document.getElementById("words").value = words;
    counter(inputTxt.value);
}

function getWordCount(str) {
    let word = str.trim().split(/\s+/);
    return word[0] === '' ? 0 : word.length;
}

function counter(str) {
    let alphaCount = 0;
    let numberCount = 0;
    let charCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') charCount++;
        if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) alphaCount++;
        if (str[i] >= '0' && str[i] <= '9') numberCount++;
    }

    document.getElementById("chars").value = charCount;
    document.getElementById("numbers").value = numberCount;
    document.getElementById("alphabets").value = alphaCount;
}


