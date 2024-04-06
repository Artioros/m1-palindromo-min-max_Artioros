function isPalindrome(str){
    let verdadeiro = false
    str = str.toLowerCase()
    str = str.replace(/\s/g,'')
    
    let arr = str.split('')
    let palavra = ''
        
    for (let i = arr.length - 1; i >= 0 ; i--) {
        palavra += arr[i]
    }
       
    let arr2 = str.split('')
    let palavra2 = ''
    
    for (let i = 0; i < arr2.length; i++) {
        palavra2 += arr2[i]
    }
    
    if (palavra === palavra2) {
        verdadeiro = true
    }
    
    return verdadeiro
}

isPalindrome()

function arrayMaxMin(arr){
    let max = 0
    let min = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }

    return [min,max]
}

(arrayMaxMin())
