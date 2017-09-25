// Example 
PartyPromise = new Promise (function (resolve, reject) {
 var PartyBegin = false;
  if (PartyBegin) {
    resolve("Bottle is opened! :D"); 
  } else {
    reject("No party today :(");
  }
});

PartyPromise.then(function(xyz){
	console.log("Lets start, "+ xyz);
}).catch(function(efg){
	console.log("Let's go to sleep, "+ efg);
});

//Example2 ---- Not executed!
PartyPromise = function(){
    return new Promise ( function (resolve, reject){
  
    var PartyBegin = true;
    if (PartyBegin) {
      var bottle = {
        type: "Whiskey",
        brand: "Jack Daniels"
      };
      resolve("Bottle is opened! :D"); 
    } else {
      var explaination = new Error ("Didn't find the bottle");
      reject("No party today :(");
    }
   });
  };
  var abcd =  function() {
      return new Promise (function (resolve, reject) {
        if (abcd) {
      resolve("Found the Bottle");
    } else { 
      reject("Didn't find the bottle");
      }
    });
  };
  
  var enjoy = function () {
    return new Promise (function(resolve, reject){
      if (enjoy) {
        resolve( "Hey Guys, I have got a bottle "+ bottle.brand + bottle.type);
      } else {
        reject("Hey Guys, I didn't find the bottle");
      }
    });
  };
  
  
  /*
  PartyPromise().then(function(){
    return abcd();
  }).then(function() {
    return enjoy();
  });
  
  */
  
  PartyPromise().then(function(result){
    return abcd(result);
  }).then(function(result){
    return enjoy(result);
  }).then(function(){
    console.log("Done!"+result);
  }).catch(function(result){
    return abcd(result);
  }).catch(function(result){
    return enjoy(result);
    
  });
    