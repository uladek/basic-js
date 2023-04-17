const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
 if(!date){
  return ;
 }
        const options = {month: 'long'};
          let month = date.toLocaleDateString('en', options);

   // console.log(date.getMonth())
    // let numMonth = date.getMonth()

    if(  month  === 'March'  ||  month === 'April'  ||  month === 'May') {
        return 'spring'
    } else if (  month === 'June' || month=== 'July'  ||  month=== 'August')   {
         return 'summer'
    } else if (  month === 'September'  || month===' October' ||  month === 'November') {
        return 'autumn'
    } else {
    return 'winter'
}
}

module.exports = {
  getSeason
};
