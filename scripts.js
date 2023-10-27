function generateSingleStanza(number) {
    let word = 'бутыл'
    let numberString = number.toString()
    if (number === 1) {
        return `${number} ${word + 'ка'}`
    } else if (number > 1 && number < 5) {
        return `${number} ${word + 'ки'}`
    } else if(number > 4 && number < 21) {
        return `${number} ${word + 'ок'}`
    } else if((numberString[0] > '1' && numberString[0] <= '9') && numberString[1] === '1') {
        return `${number} ${word + 'ка'}`
    } else if ((numberString[0] > '1' && numberString[0] <= '9') && (numberString[1] >= '2' && numberString[1] < '5')) {
        return `${number} ${word + 'ки'}`
    } else if ((numberString[0] > '1' && numberString[0] <= '9') && (numberString[1] >= "5" && numberString[1] <= '9')) {
        return `${number} ${word + 'ок'}`
    } else {
        return `нет бутылок пива`
    }
}

function generateSongText(num) {
    let text = ''
    for(let i = num; i > 0; i--) {
        text += `
        ${generateSingleStanza(i)} пива на стене! ${generateSingleStanza(i)} пива! 
        Возьми одну, пусти по кругу, ${generateSingleStanza(i - 1)} на стене!
        `
    }
    console.log(text)
}

generateSongText(25)


