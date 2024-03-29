const MessageMixer = {
    countCharacter: function (inputString,inputCharacter) {
        let count = 0;
        let string = inputString.toLowerCase();
        let character = inputCharacter.toLowerCase();
          for (let i = 0; i < string.length; i++) {
            if (string[i] === character) {
               count++;
            }
          }
        return count; 
    },
    capitalizeFirstCharacterOfWords: function (string) {
        let arr = string.split(" ");  
        for (let i = 0; i < arr.length; i++) {  
          let word = arr[i];
            arr[i] = word[0].toUpperCase() + word.substring(1); 
        }
      return arr.join(" ");
    },
    reverseWord: function (word) {
        return word.split("").reverse().join("");
    },
    reverseAllWords: function (sentence) {
        let words = sentence.split(" ");
        for (let i = 0; i < words.length; i++) {
          words[i] = MessageMixer.reverseWord(words[i]);
        }
       return words.join(" ");
    },
    replaceFirstOccurrence: function (string,toBeReplaced,replaceWith) {
        return string.replace(toBeReplaced, replaceWith);
    },
    replaceAllOccurrences: function (string, toBeReplaced, replaceWith) {
        return string.split(toBeReplaced).join(replaceWith);
      },
    encode: function (string) {
        let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
        for (let key in replacementObject) {
          string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]); 
        }	
        return string;
    },
    palindrome: function (str) {
        let palindromeStr = [];
        for (let i=str.length-1; i>=0; i--) {
            palindromeStr.push(str[i]);
        }
        return `${str} : ${palindromeStr.join('')}`;
    },
    pigLatin: function (sentence,character) {
        return sentence.split(' ').join(character + ' ');
    }
};

module.exports = MessageMixer;