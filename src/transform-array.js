const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {   
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
 
//   if(!(Array.isArray(arr))) {
//     return false;
//   }

//    let newArray  = arr.slice(0);

//     for (let i = 0; i < newArray.length; i++) {
//       if (newArray[i] === '--discard-next') {
        
//         newArray.splice(i, 2); 
//         return newArray;
          
//       } else if (newArray[i] === '--discard-prev') {
          
//         newArray.splice([i-1], 2);
//              return newArray;
//    }  else if (newArray[i] === '--double-next') {              
          
//     newArray.splice(i,1, newArray[i+1]);
//          return newArray;
          
//    }else if (i === '--double-prev') {
          
//     newArray.splice(i, 1, newArray[i-1]);
//          return newArray;

//   }
// }
}

module.exports = {
  transform
};
