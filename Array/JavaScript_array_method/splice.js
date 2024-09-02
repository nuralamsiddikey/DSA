// javascript splice method add or remove items from the array elements

//in this example add 'go' at 1 index of language array without removing any items
const language = ["c", "c++", "python", "javascript", "typescript"];
language.splice(1, 0, "go");
console.log(language);

//remove 2 element from index 3
const language2 = ["c", "c++", "python", "javascript", "typescript"];
language2.splice(3, 2);
console.log(language2);

//remove one item from 2 index and add 'php','c#'
const language3 = ["c", "c++", "python", "javascript", "typescript"];
language3.splice(2, 1, "php", "c#");
console.log(language3);
