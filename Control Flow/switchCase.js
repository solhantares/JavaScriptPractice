

function isVowel(vowel) {
    let vowCons = 'Consonant';
    switch (vowel) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            vowCons = 'Vowel';
    }
    console.log(vowel + ' is a ', vowCons);
}

function isVowel2(vowel) {

    switch (vowel) {
        case 'a':
            console.log("Vowel");
            break;
        case 'b':
            console.log("Consonant");
            break;
        default:
            console.log("Undefinedd");

    }

}

isVowel('a');
isVowel('b');
isVowel('i');
