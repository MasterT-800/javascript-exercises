const findTheOldest = function(array) {
  let length = array.length;
  // If person has not died set death date to current date
  for (let i =0; i < length; i++) {
    if ("yearOfDeath" in array[i] == false) {
      array[i].yearOfDeath = ((new Date()).getFullYear());
    }
}
  //Sort people by oldest to youngest and return the oldest person object
    const oldest = array.sort(function(a, b) {
        const lastInventor = a.yearOfDeath - a.yearOfBirth;
        const nextInventor = b.yearOfDeath - b.yearOfBirth;
        return lastInventor > nextInventor ? -1 : 1;
      });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
