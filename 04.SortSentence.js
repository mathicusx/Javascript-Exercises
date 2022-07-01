var sortSentence = function (sentence) {

    const sentenceArr = sentence.split(" ")
    const resultArr = new Array(sentenceArr.length -1 )
        for(let word of sentenceArr){
            let position = word[word.length - 1]
            resultArr[position - 1] = word.slice(0, word.length - 1);
        }
        return resultArr.join(" ");
}