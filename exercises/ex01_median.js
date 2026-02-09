/*
Exercice 1 — Médiane de deux tableaux triés

Énoncé :
On te donne deux tableaux de nombres triés nums1 et nums2.
Retourner la médiane de l'ensemble des valeurs des deux tableaux réunis.

Rappel :
- Total impair -> élément du milieu
- Total pair -> moyenne des 2 éléments du milieu
*/

function findMedianSortedArrays(nums1, nums2) {
  let mixedArray = nums1.concat(nums2);
  mixedArray.sort();
  let half = Math.floor(mixedArray.length / 2);
  if (mixedArray.length == 1) {
    return mixedArray[0];
  } else if (half % 2 != 0) {
    return mixedArray[half];
  } else {
    return (mixedArray[half - 1] + mixedArray[half]) / 2;
  }
}

// --------------------
// Tests (au moins 3)
// --------------------
console.log(findMedianSortedArrays([1, 3], [2])); // attendu: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // attendu: 2.5
console.log(findMedianSortedArrays([], [1])); // attendu: 1 (cas limite)
