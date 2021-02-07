var isPalindrome = function(x) {
    let strNum = x.toString();
    if(x < 0)
        return false;
    let middle = Math.floor(strNum.length / 2)
    for(let i = 0; i < middle; i++) {
        if(strNum[i] !== strNum[strNum.length - i - 1])  {
            return false
        }
    }
    return true;
};

isPalindrome(11); //true
isPalindrome(1231234); //false
