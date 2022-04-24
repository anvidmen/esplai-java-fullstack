let originalText = "change the letters a to o"

const replaceWords =  () =>  originalText = originalText.replace('a', 'o')
console.log(replaceWords())

const stringStartingWith = string => string.startsWith("aca")
console.log(stringStartingWith("academy"))
console.log(stringStartingWith("school"))

const repeatWords =  greetings => greetings.repeat(3)
console.log(repeatWords("hello "))