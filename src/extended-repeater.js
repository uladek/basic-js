const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

str= `${str}`;

  let newStr = str;
  let count  = options.repeatTimes;
   // let addition;
  // let  additionRepeatTimes;
   
   let sep ;
if(Object.keys(options).includes('separator')) {
  sep  =options.separator;
 } else {
  sep = '+';
}

let addition = String(options.addition);
  let  additionRepeatTimes = options.additionRepeatTimes;
   
   if(!Object.keys(options).includes('additionRepeatTimes')) {
       additionRepeatTimes = 1;
   }

   //умножаем  additional на add...Times
////    
   let additionSeparator =  options.additionSeparator;
    // additionSeparator.repeat(additionRepeatTimes)
if( (!Object.keys(options).includes('additionSeparator')) && ((additionRepeatTimes > 1) && (Object.keys(options).includes('addition')))) {
   additionSeparator = '|'
}
    let multiAdd;

   
if(Object.keys(options).includes('addition') &&  (additionRepeatTimes === 1)) {

    //!!неправильное условие
     multiAdd = addition.repeat(additionRepeatTimes) ;

   
    while (count > 1)  {
           newStr +=  multiAdd + sep + str ;
        count--
 
       }
   console.log()
    return newStr+multiAdd;
   
//  }  else if ((additionRepeatTimes > 1) &&  (Object.keys(options).includes('additionSeparator'))) {


}  else if (((additionRepeatTimes > 1) &&  (Object.keys(options).includes('additionSeparator'))) || (!Object.keys(options).includes('additionSeparator')) && ((additionRepeatTimes > 1) && (Object.keys(options).includes('addition'))) ){
    // multiAdd = addition.repeat(additionRepeatTimes);
 
   countSep = options.additionRepeatTimes;
   
    multiAdd = addition

     console.log(addition)
    console.log(additionSeparator)
    // console.log(addition)
   // multiAdd =   multiAdd + additionSeparator + addition
    
   
      while (countSep > 1) {
          countSep--
          
        multiAdd =   multiAdd + additionSeparator + addition;
      }
   console.log(multiAdd)
   
      //между 3мя add вставить 2 addsep =>
    //plus00pus00plus

    while (count > 1)  {
           newStr +=  multiAdd + sep + str ;
        count--

       }
   console.log()
    return newStr+multiAdd;
   
}

else {
   // addition = '';
    while (count > 1)  {
           newStr += sep + str ;
           count--
           console.log(count)
           console.log(newStr)  
       }
    return newStr;
 }


}

module.exports = {
  repeater
};
