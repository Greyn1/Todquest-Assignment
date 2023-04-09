/*  
Q.5.Write a program to display this pattern ?
******
*   *
*  *
* *
**
*
*/

let totalRows = 6;
for (let i = 1; i <= totalRows; i++) {
  let starAndSpacePattern = '';
  for (let j = 1; j <= totalRows - i + 1; j++) {
    if (i === 1 || j === 1 || j === totalRows - i + 1) {
      starAndSpacePattern += '*';
    } else {
      starAndSpacePattern += ' ';
    }
  }
  console.log(starAndSpacePattern);
} 
