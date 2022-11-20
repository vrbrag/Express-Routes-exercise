// convert string index to Number, 
// if Number isNaN, throw error
function convertAndValidateNumsArray(numsAsStrings) {
   let result = [];

   for (let i = 0; i < numsAsStrings.length; i++) {
      let valToNumber = Number(numsAsStrings[i]);

      if (Number.isNaN(valToNumber)) {
         // create a new error
         return new Error(
            `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
         );
      }

      result.push(valToNumber);
   }
   return result;
}

function findMean(nums) {
   if (nums.length === 0) return 0
   let add = nums.reduce((a, b) => a + b, 0)
   let mean = add / nums.length
   return mean
}


function findMedian(nums) {
   nums.sort(function (a, b) {
      return a - b
   })
   let middleIndex = Math.floor(nums.length / 2)
   let median
   // if even 
   if (middleIndex % 2 == 0) {
      median = (nums[middleIndex] + nums[middleIndex - 1]) / 2
   } else { // if odd
      median = nums[middleIndex]
   }
   return median
}


function findMode(nums) {
   // create obj counting frequency of each number
   let obj = {}
   nums.forEach(n => {
      if (!obj[n]) {
         obj[n] = 1
      } else {
         obj[n] += 1
      }
   })
   // return KEY with highest corresponding value
   let highestValue = 0
   let highestValueKey

   for (let key in obj) {
      const value = obj[key]
      if (value > highestValue) {
         highestValue = value,
            highestValueKey = key
      }
   }
   return highestValueKey
}



module.exports = {
   convertAndValidateNumsArray,
   findMean,
   findMedian,
   findMode
}