/*
Exercice 2 — Permutation suivante

Énoncé :
Écrire nextPermutation(nums) qui modifie nums sur place pour obtenir la permutation suivante
dans l'ordre lexicographique. Si nums est la dernière permutation, la transformer en plus petite
(permutation triée en ordre croissant).
*/

function nextPermutation(nums) {
  let max = Math.max(...nums);
  if (nums.indexOf(max) == 0) {
    nums.sort();
  } else {
    let tempIndex = nums.indexOf(max) - 1;
    nums[nums.indexOf(max)] = nums[tempIndex];
    nums[tempIndex] = max;
  }
}

// --------------------
// Tests (au moins 3)
// --------------------
let a = [1, 2, 3];
nextPermutation(a);
console.log(a); // attendu: [1,3,2]

let b = [3, 2, 1];
nextPermutation(b);
console.log(b); // attendu: [1,2,3]

let c = [1, 1, 5];
nextPermutation(c);
console.log(c); // attendu: [1,5,1]
