var toGoatLatin = function(S) {
  let lettersInSentence = S.split(" ");
  let currentWord;
  let pigLatinSentence = [];
  //loop trough letters in sentence array
  for(let i = 0; i < lettersInSentence.length; i++){
      currentWord = lettersInSentence[i];
    //check to see currentWord begins with a vowel
    if(beginsWithVowel(currentWord)){
       //if true then apply logic in rule one
       // append 'ma' to the end of the word
       // add 'a' depending on the index of the word
       pigLatinSentence.push(currentWord + 'ma' + addLetterADepengingOnIndex(i));
    } else{
        //Apply logic in rule number two
        //remove first letter and append it to last
        pigLatinSentence.push(moveFirstLetterToLast(currentWord) + 'ma' + addLetterADepengingOnIndex(i)); 
    }
  }
    return pigLatinSentence.join(" ");
};

var beginsWithVowel = function(word){
    //all possible vowels
    var vowels = ["a","e","i","o","u"];
    //convert string word into array and separate the word
    // letter by letter and turn to lower case
    var firstLetter = word.split("")[0].toLowerCase();
    return vowels.includes(firstLetter);   
};

var addLetterADepengingOnIndex = function(index) {
  let aBunchOfA = []; 
  for(let i =0; i < index + 1; i++){
    aBunchOfA.push('a');
  }
  return aBunchOfA.join("");
}

var moveFirstLetterToLast = function(word) {
  let lettersInWord = word.split("");
  //grab first letter and delete first letter from array
  let firstLetter = lettersInWord.shift();
  //append first letter to the end of array and return word
  lettersInWord.push(firstLetter);
  //return the word back as string with first letter at the end
  return lettersInWord.join("");
};

// console.log(addLetterADepengingOnIndex(1));
console.log(toGoatLatin("I speak Goat Latin") === "Imaa peaksmaaa oatGmaaaa atinLmaaaaa");
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog") === "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa");
