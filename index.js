const arr1 = new Array(1, 2, 3, 4, 5);
const arr2 = new Array(5, 4, 3, 2, 1);
const arr3 = new Array();

arr3[0] = arr1;
arr3[1] = arr2;

//Iterando um array
for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3[i].length; j++) {
    console.log(arr3[i][j]);
  }
}
