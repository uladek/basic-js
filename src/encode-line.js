const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let res = []
    
   let count = 1
    for(let k of str){
 
  
  if(res.length ===0 || k !== res[res.length-1]) {
    //проверям пустой ли res массив и не совпадает ли последний символ с k
      res.push(k)
       console.log(res[res.length-1])
      count =1
  } else if( k === res[res.length-1] ) {
    //если сопадает
      
     count++
      console.log(count)
  res.pop()

      if (typeof res[res.length-1] == 'number') {
        //после pop проверям последнйи ли символ цифра
          res.pop()
      }

      res.push(count)
      res.push(k)
     
 }
}
  return res.join('')

}

module.exports = {
  encodeLine
};
