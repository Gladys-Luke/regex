//1. Regexp golf

//Define the regular expressions
const item1 = (/ca[rt]/, "car");
const item2 = (/pr?op/, "pop");
const item3 = (/ferr(et|y|ari)/, "ferret");
const item4 = (/.ious/, "dubious");
const item5 = (/\s[.,:;]/);
const item6 = (/\b\w{7,}\b/);
const item7 = (/\b[^eE\s]+\b/);

// Test strings
const testString1 = "I have a car and a cat.";
const testString2 = "He likes pop music, and she prefers prop music.";
const testString3 = "The ferret, ferry, and ferrari are fast.";
const testString4 = "The deliciousious food is nutritious.";
const testString5 = "There's a space . here, a comma , there, and a semicolon ; somewhere.";
const testString6 = "Short words like cat and dog, and longer words like elephant and rhinoceros.";
const testString7 = "This sentence contains the letter E.";

// Test the regular expressions
console.log(item11.test(testString1)); //true
console.log(item2.test(testString2)); //true
console.log(item3.test(testString3)); //true
console.log(item4.test(testString4)); //true
console.log(item5.test(testString5)); //true
console.log(item6.test(testString6)); //true
console.log(item7.test(testString7)); //false


//2. Quoting style

const story = "He said, 'I don't think you should do that,' but she replied, 'I'm not sure.'";

const replacedStory = story.replace(/'(?![\sA-Za-z])|(?<=[\sA-Za-z])'/g, '"');

console.log(replacedStory);


//3. Numbers again


/^[+-]?(?:\d+\.\d*|\.\d+|\d+)(?:[eE][+-]?\d+)?$/


//Explanation

// ^[+-]?: Matches an optional plus or minus sign at the beginning of the number.
// (?:\d+\.\d*|\.\d+|\d+): This part matches the numeric portion of the number.
// \d+\.\d*: Matches numbers with one or more digits before the dot and zero or more digits after it.
// \.\d+: Matches numbers with zero or more digits before the dot and one or more digits after it.
// \d+: Matches numbers without a dot.
// (?:[eE][+-]?\d+)?: Matches an optional exponent notation, which consists of 'e' or 'E' followed by an optional plus or minus sign and one or more digits.
// $: Ensures that the entire string consists of a valid JavaScript-style number.
