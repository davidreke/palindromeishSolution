const fs = require('fs');

fs.readFile('./words.txt', (err,data) => {
   console.log(checkAllforPalindromeish(data.toString()))
})


function checkAllforPalindromeish(words){
     let wordsArray =words.split(/\r\n/)

    return wordsArray.filter(checkWordForPalindromeish)

}

function checkWordForPalindromeish(word){
    if (word.length < 6){
        return false
    }

    if(word.length % 2 !== 1){
        return false
    }

    let middleIndex= (Math.floor(word.length/2))-1
    // console.log(middleIndex)

    // console.log(word.substring(middleIndex,middleIndex+3))

    if(word.substring(middleIndex,middleIndex+3) !== 'eli'){
        // console.log('middle is not eli')
        return false
        
    }

    let beginning = word.substring(0,middleIndex)
    let end = word.substring(middleIndex+ 3,word.length)

    let reversedbeginning = beginning.split("").reverse().join("")

     
    return end === reversedbeginning


}

console.log(checkWordForPalindromeish('poopelipoop'))
