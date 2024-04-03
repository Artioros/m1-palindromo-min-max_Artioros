// function isPalindrome(str){
//     let verdadeiro = false
    
//     function invertePalavras (str) {
//         str = str.toLowerCase()
//         str = str.replace(/\s/g,'')
//         let arr = str.split('')
//         let palavra = ''
        
//         for (let i = arr.length - 1; i >= 0 ; i--) {
//             palavra += arr[i]
//         }
        
//         return palavra
//     }
    
//     function palavras (str) {
//         str = str.toLowerCase()
//         str = str.replace(/\s/g,'')
//         let arr = str.split('')
//         let palavra = ''
    
//         for (let i = 0; i < arr.length; i++) {
//                 palavra += arr[i]
//         }
    
//         return palavra
//     }
    
//     if (invertePalavras(str) === palavras(str)) {
//             verdadeiro = true
//     }
    
//     return verdadeiro
// }

// isPalindrome('A torre da derrota')

function arrayMaxMin(arr){
    let max = 1
    let min = 1

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }

    arr.unshift(min)
    arr.push(max)
    return arr
}

console.log(arrayMaxMin([1,52,59,16,13,9]))
