// function sumZero(array) {
//     let sum = 0
    
//     for (let i = 0; i < array.length; i++){
        
//         sum += array[i]
        
//         if (sum === 0) 
//             return true
        
//         } 
//         return false
// }
O(1) space complexity
// console.log(sumZero([90, -80, -11]))

// function uniqueString(string){
//    for(let i = 0; i < string.length; i++){
//     for (let j = i + 1; j <string.length; j++){
//         if(string[i] === string[j]){
//             return false
//         }
//     }
// }
// return true
// }
o(1) space complexity
// console.log(uniqueString('mood'))

//     let alphabet = ["a","b","c","d","e","f","g","h","i","j","k", "l","m","n","o","p","q", "r", "s","t","u","v", "w","x","y","z",];
// function isPangram(string){
//     string.toLowerCase
//     for (x of alphabet) {
//         if (!string.includes(x)){
//             return false
//         }
//     }
//     return true
// }
O(1)
// console.log(isPangram('The quick brown fox jumps over the lazy dogs'))
// console.log(isPangram("I like cats, but not mice"))

// function longestWord(array) {
//     let word = ""
//     for (let i = 0; i < array.length; i++){
//         if(word.length < array[i].length){
//             word = array[i]
//         }
//     }
//     return word.length

// }
O(1) space complexity
// console.log(longestWord(['one', 'three']))