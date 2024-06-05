const palindrome = (str) => {
    const len = str.length - 1;
    let left = 0;
    let right = len;

    while (left < right) {
        if (str[left] != str[right])
            return (false);
        left++;
        right--;
    }
    console.log("true");        
    return (true);
}

palindrome("racecar");