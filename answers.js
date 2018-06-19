// Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByString(s, t) {
    var sequence = ''
    var freq = {}

    for (var i = 0; i < s.length; i++) {
        if (freq[s[i]]) {
            freq[s[i]]++
        } else {
            freq[s[i]] = 1
        }
    }

    for (var i = 0; i < t.length; i++) {
        if (freq[t[i]] !== undefined) {
            sequence += t[i].repeat(freq[t[i]])
        }
    }
    return sequence
}


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


// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 
// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 
// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 
// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function makeChange(amount, coins) {
    var combinations = [];
    for (var i = 1; i <= amount; i++) {
        combinations[i] = 0;
    }
    combinations[0] = 1;

    coins.forEach(function (coin) {
        changeHelper(coin, amount, combinations)
    });

    return combinations[amount];

}

function changeHelper(coin, amount, combinations) {
    for (var i = coin; i <= amount; i++) {
        var remainder = i - coin;
        combinations[i] += combinations[remainder];
    }
}