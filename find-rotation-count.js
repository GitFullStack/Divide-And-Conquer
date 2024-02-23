function findRotationCount(arr, val) {
    //expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2)
    //expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4)
    //expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0)
    count = 0;
    for(let i = 0; i< arr.length; i++){
       if(arr[i]>arr[arr.length - 1]){
         let temp = arr[i]
         arr[i] = arr[arr.length - 1]
         arr[arr.length - 1] = temp
         count++;
       }
    }
    return count;
}

module.exports = findRotationCount