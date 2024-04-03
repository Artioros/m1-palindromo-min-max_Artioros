function isPalindrome(str){
    function isPalindrome(str){
        let verdadeiro = false
    
        function invertePalavras (str) {
            str = str.toLowerCase()
            str = str.replace(/\s/g,'')
            let arr = str.split('')
            let palavra = ''
        
            for (let i = arr.length - 1; i >= 0 ; i--) {
                palavra += arr[i]
            }
        
            return palavra
        }
    
        function palavras (str) {
            str = str.toLowerCase()
            str = str.replace(/\s/g,'')
            let arr = str.split('')
            let palavra = ''
    
            for (let i = 0; i < arr.length; i++) {
                palavra += arr[i]
            }
    
            return palavra
        }
    
        if (invertePalavras(str) === palavras(str)) {
            verdadeiro = true
        }
    
        return verdadeiro
    }
}

console.log(isPalindrome('A torre da derrota'))

function arrayMaxMin(arr){
    /* Seu código aqui */
}
