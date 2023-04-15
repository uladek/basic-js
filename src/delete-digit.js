const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let temp =[]
  for(let i=0; i < n.toString().split('').length; i++) {
     
          let nArr = n.toString().split('')
  
     //  console.log(nArr[i])
    nArr.splice(nArr.indexOf(nArr[i]), 1).join('')
      // перебираем и удаляем один элемент из массива
      let number = Number(nArr.join(''))
      temp.push(number)
      //массив в которм будем сравнивать
  
      
  }   
      let result = Math.max(...temp)
    return result
}

module.exports = {
  deleteDigit
};
