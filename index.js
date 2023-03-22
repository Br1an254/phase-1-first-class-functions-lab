const returnFirstTwoDrivers = function(drivers){


    return drivers.slice(0,2);



}




const returnLastTwoDrivers = function(drivers){

      return drivers.slice(-2);


}
console.log(returnLastTwoDrivers);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



const  createFareMultiplier  =  function(integer){

return function(fare){

    return  fare*  integer;


}

}

const createfareMultiplier = function(Multiplier){

return function(fare){

    return fare*Multiplier;
};

};

const fareDoubler = createfareMultiplier(2);


const createFaremultiplier = function(Multiplier){

    return  function(fare){

        return  fare*Multiplier;
  

    };
};

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(driversArray, driversFunction) {
    return driversFunction(driversArray);
  }