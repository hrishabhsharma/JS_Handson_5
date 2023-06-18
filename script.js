// Output For Question No 1

Qno1 = document.getElementById("Q1")

Qno1.innerText += `\nlet STR = "abcadeecfb"
let str = new Set(STR)
str = [...str] 
let ans=str.join("")
console.log(ans)`


// Output For Question No 2

Qno2 = document.getElementById("Q2")

Qno2.innerText += `\nlet str = "abcadeecfb"
let countMap = new Map();
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (countMap.has(char)) {
    countMap.set(char, countMap.get(char) + 1);
  } else {
    countMap.set(char, 1);
  }
}
for (let [char, count] of countMap) {
    console.log("{char}={count}");
}`


