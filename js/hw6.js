const someWord = function (string) {
    if (string.at % 2 === 0) {
        return string[0].toUpperCase() + string.slice(1).toLowerCase() + string[10].toUpperCase();
    }
    else {
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
}

console.log(someWord("javaScript"));