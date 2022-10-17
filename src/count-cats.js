const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
//  countCats([
//  [0, 1, '^^'],
//   [0, '^^', 2],
//   ['^^', 1, 2],
// ]) ;
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [].concat(...matrix);
     
  let arrayCats = result.filter(function(cat) { 
      return cat === '^^';
  });
 
        let catsResult = arrayCats.length;
      return catsResult;
}

module.exports = {
  countCats
};
