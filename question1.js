// Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

// O=(2N)

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


var s = "weather"
var t = "therapyw"
sortByString(s, t) === "theeraw"