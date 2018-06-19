// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 
// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"


function decodeString(s) {
    var index = 0
    return decodeHelper(s, index)
}

function decodeHelper(s, index) {
    var finalString = '';
    var factor = 0;
    for (index; index < s.length; index++) {
        var currentChar = s[index];
        if (currentChar === '[') {
            var currentString = decodeHelper(s, index + 1);
            index += currentString.length + 1;
            for (factor; factor > 0; factor--) {
                finalString += currentString;
            }
        } else if (currentChar >= '0' && currentChar <= '9') {
            factor = factor * 10 + currentChar - '0';
        } else if (currentChar === ']') {
            return finalString;
        } else {
            finalString += currentChar;
        }
    }
    return finalString
}

decodeString("4[ab]") === "abababab"
decodeString("2[b3[a]]") === "baaabaaa"