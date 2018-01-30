// Code your solution in this file


function findMatching(array, name){
  let array_of_names =[];
   for (const driver of array){
     if (driver.toLowerCase() === name.toLowerCase()) {
       array_of_names.push(driver);
     }
   }
   return array_of_names;
}


function fuzzyMatch(array, letters){
   let array_of_names =[];
  for (const element of array){
      if (element.slice(0,letters.length) === letters) {
        array_of_names.push(element);
      }
    }
   return array_of_names;
  }



  function matchName(array, string){
     let array_of_names =[];
    for (const object of array){
        if (object.name === string){
          array_of_names.push(object);
        }
      }
     return array_of_names;
  }



//MatchName - This function takes an array of
//drivers and a string as arguments.
//In this function, each element of the drivers
//array is a JavaScript object that has a property
//of name. The function should return each element
//whose name property matches the provided string argument.
