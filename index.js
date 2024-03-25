// Code your solution here
function findMatching(drivers, string){
    const toLowerCaseString = string.toLowerCase()
    const matchingDrivers = drivers.filter(driver=>driver.toLowerCase() === toLowerCaseString)
    return matchingDrivers;
}

/* fuzzyMatch - This function takes an array of drivers' names and 
a string as arguments for querying the array, 
and returns all drivers whose names begin with the provided letters.
*/

function fuzzyMatch (drivers, string){
    const matchingDrivers = drivers.filter(driver=>driver.slice(0,string.length) === string)
    return matchingDrivers;
}

/*
matchName - This function takes an array of driver objects and a string as arguments. 
Each driver object has two properties: name and hometown. 
The function should return each element whose name property matches the provided string argument. */
function matchName (drivers, string){
    const matchingDrivers = drivers.filter(driver=>driver.name === string)
    return matchingDrivers;
}