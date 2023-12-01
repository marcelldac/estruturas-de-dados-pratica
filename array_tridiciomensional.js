/* Array tridimensional */

var month = [];

var firstWeeks = [];
var lastWeeks = [];

var avgTempWeek1 = [1, 2, 3, 4, 5];
var avgTempWeek2 = [5, 4, 3, 2, 1];
var avgTempWeek3 = [6, 7, 8, 9, 0];
var avgTempWeek4 = [10, 11, 12, 13, 14];

firstWeeks = [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeeks, lastWeeks];

for (let i = 0; i < month.length; i++) {
  for (let j = 0; j < month[i].length; j++) {
    for (let k = 0; k < month[i][j].length; k++) {
      console.log(month[i][j][k]);
    }
  }
}
