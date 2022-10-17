const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
// Array.isArray(members);
// if(!(Array.isArray(members))) {
//   return false;
// })
if(!(Array.isArray(members)) return false;


  let result =[];
  members.forEach(function(item) {

  if (typeof item === 'string'){
    let i = item.replace(/\s+/g,'');
     result.push(i);
  }       

});    
  
  return result.flatMap(arr => arr[0].toUpperCase()).sort().join('');

};

module.exports = {
  createDreamTeam
};
