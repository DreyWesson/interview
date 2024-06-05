
/**
 * Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"

 */
function reverseStrII(s, k) {
    let str = s.split("");
        for (let start = 0; start < str.length; start += 2 * k) {
             let i = start, j = Math.min(start + k - 1, str.length - 1);
            //  console.log("i: ", i, "j: ", j, "left_math", start + k - 1, "\n");
             while (i < j) {
                 let tmp = str[i];
                 str[i++] = str[j];
                 str[j--] = tmp;
                }
         }
         return str.join("");
}

console.log(reverseStrII("abcdefghijklmnopqrstuvwxyz", 2));