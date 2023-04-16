const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let keys = []
  //массив ключей в будущем объекте
let values = []
  //массив значений 
  
  for(let i of domains){
      
      let key = `.${i.toString().split('.').reverse().join('.')}`;
      let key1 = `.${i.toString().split('.').reverse().slice(0,1)}`;
  
    keys.push(key)

      if(!keys.includes(key1)){
 keys.unshift(key1)
      }
  }

     let strArr= keys.slice(1)
let str = strArr.join('').toString()

for(let k of keys){
  console.log(k)
  
  if(str.includes(k)) {
     // var type = 1;
let regex = new RegExp(k,'g')
          // console.log(str.match(regex).length) 
      values.push(str.match(regex).length) 
}
}
  // console.log(keys)
  //  console.log(values)
  let object = {};

for (let i = 0; i < keys.length; i++) {
let key = keys[i];
let value = values[i];

object[key] = value;
}

return object;

}
// (/* domains */)

module.exports = {
  getDNSStats
};
